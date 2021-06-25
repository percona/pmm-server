#!/bin/bash

set -o errexit

# export custom environment variables
ENV_FILE=/srv/envvars

ENVS_EXCEPTION=('^GF_'
                '^SUPERVISOR_'
                '^PERCONA_TEST_'
                '^DISABLE_UPDATES='
                '^DISABLE_TELEMETRY='
                '^METRICS_RESOLUTION='
                '^METRICS_RESOLUTION_HR='
                '^METRICS_RESOLUTION_MR='
                '^METRICS_RESOLUTION_LR='
                '^DATA_RETENTION='
                '^ENABLE_VM_CACHE='
                '^ENABLE_ALERTING='
                '^ENABLE_AZUREDISCOVER='
                '^ENABLE_BACKUP_MANAGEMENT='
                '^ENABLE_DBAAS='
                '^PMM_DEBUG='
                '^PMM_TRACE='
                '^HOME='
                '^HOSTNAME='
)

GREP_EXPRESSION=`( IFS=$'|'; echo "${ENVS_EXCEPTION[*]}" )`

if [[ -f "$ENV_FILE" ]]; then
    export $(cat $ENV_FILE | egrep "$GREP_EXPRESSION" | xargs)
fi

# pmm-managed-init validates environment variables.
pmm-managed-init

# Start supervisor in foreground
exec supervisord -n -c /etc/supervisord.conf
