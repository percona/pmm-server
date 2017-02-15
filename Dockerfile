FROM ubuntu:14.04

EXPOSE 80 443

WORKDIR /opt

# ############### #
# System packages #
# ############### #
RUN apt-get -y update && \
	apt-get install -y apt-transport-https curl git unzip nginx mysql-server-5.5 python python-requests supervisor && \
	rm -f /etc/cron.daily/apt && \
	useradd -s /bin/false pmm

# ########## #
# Prometheus #
# ########## #
RUN curl -s -LO https://github.com/prometheus/prometheus/releases/download/v1.5.1/prometheus-1.5.1.linux-amd64.tar.gz && \
	mkdir -p prometheus/data node_exporter && \
	chown -R pmm:pmm /opt/prometheus/data && \
	tar zxf prometheus*.tar.gz --strip-components=1 -C prometheus && \
	curl -s -LO https://github.com/prometheus/node_exporter/releases/download/v0.13.0/node_exporter-0.13.0.linux-amd64.tar.gz && \
	tar zxf node_exporter-0.13.0.linux-amd64.tar.gz --strip-components=1 -C node_exporter && \
	rm -f prometheus*.tar.gz node_exporter-0.13.0.linux-amd64.tar.gz
COPY prometheus.yml /opt/prometheus/

# ###################### #
# Grafana and dashboards #
# ###################### #
COPY import-dashboards.py grafana-postinstall.sh VERSION /opt/
RUN curl -s -LO https://grafanarel.s3.amazonaws.com/builds/grafana_4.1.1-1484211277_amd64.deb && \
	dpkg -i grafana*.deb && \
	git clone https://github.com/percona/grafana-dashboards.git && \
	mv import-dashboards.py VERSION grafana-dashboards/ && \
	service grafana-server start && \
	/opt/grafana-dashboards/import-dashboards.py && \
	rm -rf grafana*.deb grafana-dashboards/.git

# ###### #
# Consul #
# ###### #
RUN curl -s -LO https://releases.hashicorp.com/consul/0.7.3/consul_0.7.3_linux_amd64.zip && \
	unzip consul*.zip && \
	mkdir -p /opt/consul-data && \
	chown -R pmm:pmm /opt/consul-data && \
	rm -f consul*.zip

# ##### #
# Nginx #
# ##### #
COPY nginx.conf nginx-ssl.conf /etc/nginx/
RUN touch /etc/nginx/.htpasswd

# ############ #
# Orchestrator #
# ############ #
COPY orchestrator.conf.json /etc/
RUN curl -s -LO https://github.com/github/orchestrator/releases/download/v2.0.1/orchestrator_2.0.1_amd64.deb && \
	dpkg -i orchestrator_2.0.1_amd64.deb && \
	rm -f orchestrator_2.0.1_amd64.deb

# ########################### #
# Supervisor and landing page # 
# ########################### #
COPY supervisord.conf /etc/supervisor/supervisord.conf
COPY entrypoint.sh /opt
COPY landing-page/ /opt/landing-page/

# ####################### #
# Percona Query Analytics #
# ####################### #
COPY purge-qan-data /etc/cron.daily/
COPY qan-install.sh /opt/
ADD https://www.percona.com/downloads/TESTING/pmm/percona-qan-api-1.1.0-1.1702021924.dd9f688.tar.gz \
    https://www.percona.com/downloads/TESTING/pmm/percona-qan-app-1.1.0-1.1702021919.ad8b6ce.tar.gz \
    /opt/
RUN curl -s -L -o /usr/bin/pt-archiver https://raw.githubusercontent.com/percona/percona-toolkit/2.2/bin/pt-archiver && \
	chmod 755 /usr/bin/pt-archiver && \
	mkdir qan-api qan-app && \
	tar zxf percona-qan-api-*.tar.gz --strip-components=1 -C qan-api && \
	tar zxf percona-qan-app-*.tar.gz --strip-components=1 -C qan-app && \
	/opt/qan-install.sh && \
	rm -rf *.tar.gz qan-api && \
	sed -i 's/1.0.0/1.1.1/g' qan-app/index.html

# ##### #
# Start #
# ##### #
CMD ["/opt/entrypoint.sh"]
