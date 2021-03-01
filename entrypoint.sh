#!/bin/bash

set -o errexit

# pmm-managed-init validates environment variables.
pmm-managed-init

# Perform NGINX logrotation
if [ "${PMM_NGINX_LOGROTATE:=1}" = "1" ]; then
    find /srv/logs -type f -name nginx\*log -size +"${PMM_NGINX_LOGROTATE_SIZE:=50M}" -not -name nginx.startup.log | while read -r logfile; do
        mv -v "${logfile}" "${logfile/.log/.$(date -Id).log}"
    done
    find /srv/logs -type f -name nginx\*.log -mtime +"${PMM_NGINX_LOGROTATE_DAYS:=7}" -not -name nginx.startup.log -print -delete
fi

# Start supervisor in foreground
exec supervisord -n -c /etc/supervisord.conf
