#!/bin/bash

service grafana-server start

python /opt/import-dashboards.py
