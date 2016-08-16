#!/bin/bash

replace 1s ${METRICS_RESOLUTION:-1s} -- /opt/prometheus/prometheus.yml

if [ -e /etc/nginx/ssl/server.crt ] && [ -e /etc/nginx/ssl/server.key ]; then
    sed -i 's/#include nginx-ssl.conf/include nginx-ssl.conf/' /etc/nginx/nginx.conf
    if [ -e /etc/nginx/ssl/dhparam.pem ]; then
        sed -i 's/#ssl_dhparam/ssl_dhparam/' /etc/nginx/nginx-ssl.conf
    fi
fi

if [ -n "$HTTP_PASSWORD" ]; then
    echo "${HTTP_USER:-pmm}:$(openssl passwd -apr1 $HTTP_PASSWORD)" > /etc/nginx/.htpasswd
    sed -i 's/auth_basic off/auth_basic "PMM Server"/' /etc/nginx/nginx.conf

    # Disable Grafana HTTP auth
    sed -i '/\[auth.basic\]/ a enabled=false' /etc/grafana/grafana.ini
fi

supervisord -c /etc/supervisor/supervisord.conf
