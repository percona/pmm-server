#!/bin/bash

set -o errexit

# pmm-managed-init validates environment variables.
pmm-managed-init

/usr/share/percona-dashboards/import-dashboards.py -d&

# Start supervisor in foreground
exec supervisord -n -c /etc/supervisord.conf

