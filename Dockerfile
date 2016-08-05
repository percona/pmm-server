FROM ubuntu:latest

EXPOSE 80

WORKDIR /opt

# ########################### #
# MySQL and other system pkgs #
# ########################### #

RUN apt-get -y update && apt-get install -y \
	apt-transport-https \
	curl \
	git \
	unzip \
	nginx \
	mysql-server \
	python \
	supervisor

# ########## #
# Prometheus #
# ########## #

ADD https://github.com/prometheus/prometheus/releases/download/v1.0.1/prometheus-1.0.1.linux-amd64.tar.gz /opt/
RUN mkdir prometheus && \
	tar xfz prometheus-1.0.1.linux-amd64.tar.gz --strip-components=1 -C prometheus
COPY prometheus.yml /opt/prometheus/

# ####### #
# Grafana #
# ####### #

RUN echo "deb https://packagecloud.io/grafana/stable/debian/ wheezy main" > /etc/apt/sources.list.d/grafana.list && \
	curl https://packagecloud.io/gpg.key | apt-key add - && \
	apt-get -y update && \
	apt-get -y install grafana
RUN git clone https://github.com/percona/grafana-dashboards.git && \
	mkdir /var/lib/grafana/dashboards && \
	cp grafana-dashboards/dashboards/* /var/lib/grafana/dashboards/
RUN git clone https://github.com/Percona-Lab/grafana_mongodb_dashboards.git && \
	cp grafana_mongodb_dashboards/dashboards/* /var/lib/grafana/dashboards/
COPY grafana.ini /etc/grafana/grafana.ini
COPY grafana-postinstall.sh /opt
RUN chgrp grafana /etc/grafana/grafana.ini && \
	/opt/grafana-postinstall.sh

# ####################### #
# Percona Query Analytics #
# ####################### #

ADD https://www.percona.com/downloads/TESTING/pmm/percona-qan-api-1.0.0-20160805.fc1a822-x86_64.tar.gz \
    https://www.percona.com/downloads/TESTING/pmm/percona-qan-app-1.0.3-20160805.00641f9.tar.gz \
    /opt/
RUN mkdir qan-api && \
	tar zxf percona-qan-api-1.0.0-20160805.fc1a822-x86_64.tar.gz --strip-components=1 -C qan-api && \
	mkdir qan-app && \
	tar zxf percona-qan-app-1.0.3-20160805.00641f9.tar.gz --strip-components=1 -C qan-app
COPY qan-install.sh /opt
RUN /opt/qan-install.sh

COPY pt-archiver /usr/bin/
COPY purge-qan-data /etc/cron.daily
RUN rm /etc/cron.daily/apt

# ###### #
# Consul #
# ###### #

ADD https://releases.hashicorp.com/consul/0.6.4/consul_0.6.4_linux_amd64.zip /opt/
RUN unzip consul_0.6.4_linux_amd64.zip && \
	mkdir -p /opt/consul-data

# ##### #
# Nginx #
# ##### #

COPY nginx.conf /etc/nginx

# ############ #
# Landing page # 
# ############ #

COPY landing-page/ /opt/landing-page/

# ############################## #
# Run everything with supervisor #
# ############################## #

COPY supervisord.conf /etc/supervisor/supervisord.conf
CMD ["supervisord", "-c", "/etc/supervisor/supervisord.conf"]
