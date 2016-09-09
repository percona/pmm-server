FROM ubuntu:latest

EXPOSE 80 443

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
	python-requests \
	supervisor && \
	rm -f /etc/cron.daily/apt && \
	useradd -s /bin/false pmm

# ########## #
# Prometheus #
# ########## #

RUN curl -s -LO https://github.com/prometheus/prometheus/releases/download/v1.0.2/prometheus-1.0.2.linux-amd64.tar.gz && \
	mkdir -p prometheus/data && \
	chown -R pmm:pmm /opt/prometheus/data && \
	tar xfz prometheus-1.0.2.linux-amd64.tar.gz --strip-components=1 -C prometheus
COPY prometheus.yml /opt/prometheus/

# ####### #
# Grafana #
# ####### #

RUN echo "deb https://packagecloud.io/grafana/stable/debian/ wheezy main" > /etc/apt/sources.list.d/grafana.list && \
	curl -s https://packagecloud.io/gpg.key | apt-key add - && \
	apt-get -y update && \
	apt-get -y install grafana && \
	git clone https://github.com/percona/grafana-dashboards.git && \
	git clone -b alias2instance https://github.com/roman-vynar/grafana_mongodb_dashboards.git
COPY import-dashboards.py /opt
COPY grafana-postinstall.sh /opt
RUN /opt/grafana-postinstall.sh

# ###### #
# Consul #
# ###### #

RUN curl -s -LO https://releases.hashicorp.com/consul/0.6.4/consul_0.6.4_linux_amd64.zip && \
	unzip consul_0.6.4_linux_amd64.zip && \
	mkdir -p /opt/consul-data && \
	chown -R pmm:pmm /opt/consul-data

# ##### #
# Nginx #
# ##### #

COPY nginx.conf /etc/nginx
COPY nginx-ssl.conf /etc/nginx
RUN touch /etc/nginx/.htpasswd && \
	touch /run/nginx.pid && \
	chown -R www-data:www-data /var/lib/nginx /run/nginx.pid && \
	setcap cap_net_bind_service=+ep /usr/sbin/nginx

# ########################### #
# Supervisor and landing page # 
# ########################### #

COPY landing-page/ /opt/landing-page/
COPY supervisord.conf /etc/supervisor/supervisord.conf
COPY entrypoint.sh /opt

# ####################### #
# Percona Query Analytics #
# ####################### #

COPY pt-archiver /usr/bin/
COPY purge-qan-data /etc/cron.daily
COPY qan-install.sh /opt
ADD https://www.percona.com/downloads/TESTING/pmm/percona-qan-api-1.0.4-20160819.83525f0-x86_64.tar.gz \
    https://www.percona.com/downloads/TESTING/pmm/percona-qan-app-1.0.4-20160902.93ee1f2.tar.gz \
    /opt/
RUN mkdir qan-api && \
        tar zxf percona-qan-api-1.0.4-20160819.83525f0-x86_64.tar.gz --strip-components=1 -C qan-api && \
        mkdir qan-app && \
        tar zxf percona-qan-app-1.0.4-20160902.93ee1f2.tar.gz --strip-components=1 -C qan-app && \
	/opt/qan-install.sh

# ##### #
# Start #
# ##### #
CMD ["/opt/entrypoint.sh"]
