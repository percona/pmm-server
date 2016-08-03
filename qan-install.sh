#!/usr/bin/env bash

set -eu

service mysql start

# START=no SYSINT=no because Supervisor starts and manages these processes.
cd /opt/qan-api
START="no" SYSINT="no" ./install

# Define /qan-api path for QAN app
sed -i "s/':9001',/':' + window.location.port + '\/qan-api',/" /opt/qan-app/client/app/app.js
