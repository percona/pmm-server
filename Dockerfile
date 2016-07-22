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

ADD https://github.com/prometheus/prometheus/releases/download/v1.0.0/prometheus-1.0.0.linux-amd64.tar.gz /opt/
RUN mkdir prometheus && \
	tar xfz prometheus-1.0.0.linux-amd64.tar.gz --strip-components=1 -C prometheus
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
COPY add-grafana-datasource.sh /opt
RUN chgrp grafana /etc/grafana/grafana.ini && \
	/opt/add-grafana-datasource.sh && \
	sed -i 's/expr=\(.\)\.replace(\(.\)\.expr,\(.\)\.scopedVars\(.*\)var \(.\)=\(.\)\.interval/expr=\1.replace(\2.expr,\3.scopedVars\4var \5=\1.replace(\6.interval, \3.scopedVars)/' /usr/share/grafana/public/app/plugins/datasource/prometheus/datasource.js && \
	sed -i 's/,range_input/.replace(\/"{\/g,"\\"").replace(\/}"\/g,"\\""),range_input/; s/step_input:""/step_input:this.target.step/' /usr/share/grafana/public/app/plugins/datasource/prometheus/query_ctrl.js

# ####################### #
# Percona Query Analytics #
# ####################### #

ADD https://www.percona.com/downloads/TESTING/pmm/percona-qan-api-1.0.0-20160722.9f5c394-x86_64.tar.gz \
    https://www.percona.com/downloads/TESTING/pmm/percona-qan-app-1.0.0-20160722.2df9671.tar.gz \
    /opt/
RUN mkdir qan-api && \
	tar zxf percona-qan-api-1.0.0-20160722.9f5c394-x86_64.tar.gz --strip-components=1 -C qan-api && \
	mkdir qan-app && \
	tar zxf percona-qan-app-1.0.0-20160722.2df9671.tar.gz --strip-components=1 -C qan-app
COPY install-qan.sh /opt
RUN /opt/install-qan.sh

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

COPY supervisord.conf /etc/supervisor/conf.d/pmm.conf
CMD ["supervisord"]
