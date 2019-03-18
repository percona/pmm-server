#!/bin/bash

set -o errexit

# Add logging
if [ -n "${ENABLE_DEBUG}" ]; then
    set -o xtrace
    exec > >(tee -a /var/log/$(basename $0).log) 2>&1
fi

# Prometheus
if [[ ! "${METRICS_RESOLUTION:-1s}" =~ ^[1-5]s$ ]]; then
    echo "METRICS_RESOLUTION takes only values from 1s to 5s."
    exit 1
fi
sed "s/1s/${METRICS_RESOLUTION:-1s}/" /etc/prometheus.yml > /tmp/prometheus.yml
cat /tmp/prometheus.yml > /etc/prometheus.yml
rm -rf /tmp/prometheus.yml

sed "s/ENV_METRICS_RETENTION/${METRICS_RETENTION:-720h}/" /etc/supervisord.d/pmm.ini > /tmp/pmm.ini
sed -i "s/ENV_MAX_CONNECTIONS/${MAX_CONNECTIONS:-15}/" /tmp/pmm.ini

if [ -n "$METRICS_MEMORY" ]; then
    # Preserve compatibility with existing METRICS_MEMORY variable.
    # https://jira.percona.com/browse/PMM-969
    METRICS_MEMORY_MULTIPLIED=$(( ${METRICS_MEMORY} * 1024 ))
else
    MEMORY_LIMIT=$(cat /sys/fs/cgroup/memory/memory.limit_in_bytes || :)
    TOTAL_MEMORY=$(( $(grep MemTotal /proc/meminfo | awk '{print$2}') * 1024 ))
    MEMORY_AVAIABLE=$(printf "%i\n%i\n" "$MEMORY_LIMIT" "$TOTAL_MEMORY" | sort -n | grep -v "^0$" | head -1)
    METRICS_MEMORY_MULTIPLIED=$(( (${MEMORY_AVAIABLE} - 256*1024*1024) / 100 * 15 ))
    if [[ $METRICS_MEMORY_MULTIPLIED -lt $((128*1024*1024)) ]]; then
        METRICS_MEMORY_MULTIPLIED=$((128*1024*1024))
    fi
fi
sed -i "s/ENV_METRICS_MEMORY_MULTIPLIED/${METRICS_MEMORY_MULTIPLIED}/" /tmp/pmm.ini

cat /tmp/pmm.ini > /etc/supervisord.d/pmm.ini
rm -rf /tmp/pmm.ini

# Cron
sed "s/^INTERVAL=.*/INTERVAL=${QUERIES_RETENTION:-8}/" /etc/cron.daily/purge-qan-data > /tmp/purge-qan-data
cat /tmp/purge-qan-data > /etc/cron.daily/purge-qan-data
rm -rf /tmp/purge-qan-data

# Upgrade
if [ -f /var/lib/grafana/grafana.db ]; then
    chown -R pmm:pmm /srv/prometheus/data
    chown -R grafana:grafana /var/lib/grafana
fi

# copy SSL, follow links
pushd /etc/nginx >/dev/null
    if [ -s ssl/server.crt ]; then
        cat ssl/server.crt  > /srv/nginx/certificate.crt
    fi
    if [ -s ssl/server.key ]; then
        cat ssl/server.key  > /srv/nginx/certificate.key
    fi
    if [ -s ssl/dhparam.pem ]; then
        cat ssl/dhparam.pem > /srv/nginx/dhparam.pem
    fi
popd >/dev/null

# Start supervisor in foreground
if [ -z "${UPDATE_MODE}" ]; then
    exec supervisord -n -c /etc/supervisord.conf
fi
