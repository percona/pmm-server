#!/bin/bash

set -e

# Prometheus
if [[ ! "${METRICS_RESOLUTION:-1s}" =~ ^[1-5]s$ ]]; then
    echo "METRICS_RESOLUTION takes only values from 1s to 5s."
    exit 1
fi
sed -i "s/1s/${METRICS_RESOLUTION:-1s}/" /etc/prometheus.yml
sed -i "s/ENV_METRICS_RETENTION/${METRICS_RETENTION:-720h}/" /etc/supervisord.d/pmm.ini
sed -i "s/ENV_METRICS_MEMORY/${METRICS_MEMORY:-262144}/" /etc/supervisord.d/pmm.ini

# Orchestrator
sed -i "s/orc_client_user/${ORCHESTRATOR_USER:-orc_client_user}/" /etc/orchestrator.conf.json
sed -i "s/orc_client_password/${ORCHESTRATOR_PASSWORD:-orc_client_password}/" /etc/orchestrator.conf.json

# Cron
sed -i "s/^INTERVAL=.*/INTERVAL=${QUERIES_RETENTION:-8}/" /etc/cron.daily/purge-qan-data

# SSL
if [ -e /etc/nginx/ssl/server.crt ] && [ -e /etc/nginx/ssl/server.key ]; then
    sed -i 's/#include nginx-ssl.conf/include nginx-ssl.conf/' /etc/nginx/nginx.conf
    if [ -e /etc/nginx/ssl/dhparam.pem ]; then
        sed -i 's/#ssl_dhparam/ssl_dhparam/' /etc/nginx/nginx-ssl.conf
    fi
fi

# HTTP basic auth
if [ -n "$SERVER_PASSWORD" ]; then
    echo "${SERVER_USER:-pmm}:$(openssl passwd -apr1 $SERVER_PASSWORD)" > /etc/nginx/.htpasswd
    sed -i 's/auth_basic off/auth_basic "PMM Server"/' /etc/nginx/nginx.conf

    sed -i "s/ENV_SERVER_USER/${SERVER_USER:-pmm}/g" /etc/prometheus.yml
    sed -i "s/ENV_SERVER_PASSWORD/${SERVER_PASSWORD}/g" /etc/prometheus.yml

    ENV_AUTH_BASIC="cfg:default.auth.basic.enabled=false"
fi
sed -i "s/ENV_AUTH_BASIC/${ENV_AUTH_BASIC}/" /etc/supervisord.d/pmm.ini

# Start supervisor in foreground
exec supervisord -n -c /etc/supervisord.conf
