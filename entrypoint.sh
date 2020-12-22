#!/bin/bash

set -o errexit

# pmm-managed-init validates environment variables.
pmm-managed-init

# Start supervisor in foreground
exec supervisord -n -c /etc/supervisord.conf

exec /opt/import-dbass-dashboard.py
