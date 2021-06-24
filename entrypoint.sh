#!/bin/bash

set -o errexit

# pmm-managed-init validates environment variables.
pmm-managed-init

# export custom environment variables
ENV_FILE=/srv/envvars
if [[ -f "$ENV_FILE" ]]; then
    set -a # enable export for all variables
    source $ENV_FILE
    set +a
fi

# Start supervisor in foreground
exec supervisord -n -c /etc/supervisord.conf
