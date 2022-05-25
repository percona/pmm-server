#!/bin/bash
set -o errexit

# init /srv if empty
DIST_FILE=/srv/pmm-distribution
if [ ! -f $DIST_FILE ]; then
    echo "File $DIST_FILE doesn't exist. Initizlize /srv..."
    echo docker > $DIST_FILE
    mkdir -p /srv/{clickhouse,grafana,logs,postgres,prometheus,nginx,victoriametrics}
    chown grafana:grafana /srv/grafana
    chown pmm:pmm /srv/{victoriametrics,prometheus,logs}
    echo "Generate self-signed certificates for nginx"
    bash /var/lib/cloud/scripts/per-boot/generate-ssl-certificate
    echo "Init Postgres"
    su postgres -c "/usr/pgsql-11/bin/initdb -D /srv/postgres"
fi

# pmm-managed-init validates environment variables.
pmm-managed-init

# Start supervisor in foreground
exec supervisord -n -c /etc/supervisord.conf
