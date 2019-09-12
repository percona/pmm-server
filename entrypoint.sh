#!/bin/bash

set -o errexit

# Start supervisor in foreground
exec supervisord -n -c /etc/supervisord.conf
