#!/bin/bash

set -o errexit

# export custom environment variables
ENV_FILE=/srv/grafana/envs
if [[ -f "$ENV_FILE" ]]; then
    export $(grep -v '^#' $ENV_FILE | xargs -d '\n')
fi

# pmm-managed-init validates environment variables.
pmm-managed-init

# Start supervisor in foreground
exec supervisord -n -c /etc/supervisord.conf
