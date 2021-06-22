#!/bin/bash

set -o errexit

# export custom environment variables
ENV_FILE=/srv/grafana/envs
if [[ -f "$ENV_FILE" ]]; then
    set -a # enable export for all variables
    source $ENV_FILE
    set +a
fi

# pmm-managed-init validates environment variables.
pmm-managed-init

# Start supervisor in foreground
exec supervisord -n -c /etc/supervisord.conf
