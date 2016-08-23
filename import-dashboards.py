#!/usr/bin/env python

"""Grafana dashboard importer script."""

import json
import os
import requests
import sys
import time

HOST = 'http://admin:admin@localhost:3000'
DIRS = ['/opt/grafana-dashboards/dashboards/', '/opt/grafana_mongodb_dashboards/dashboards/']


def main():
    headers = {'Content-Type': 'application/json'}

    # Wait for Grafana to start.
    for i in xrange(30): 
        try:
            r = requests.get('%s/api/datasources' % (HOST,), headers=headers)
        except requests.exceptions.ConnectionError:
            print 'Waiting for Grafana to start...'
            time.sleep(1)
        else:
            break

    # Add datasource.
    data = json.dumps({'name': 'Prometheus', 'type': 'prometheus', 'url': 'http://localhost:9090/prometheus/', 'access': 'proxy', 'isDefault': True})
    r = requests.post('%s/api/datasources' % (HOST,), data=data, headers=headers)
    if r.status_code != 200:
        sys.exit(-1)

    print r.status_code, r.content
 
    # Import dashboards.
    files = []
    for d in DIRS:
        for f in os.listdir(d):
            if not f.endswith('.json'):
                 continue

            files.append(d + f)

    for file in files:
        print file
        f = open(file, 'r')
        dash = json.load(f)
        f.close()

        data = json.dumps({'dashboard': dash, 'overwrite': True})
        r = requests.post('%s/api/dashboards/db' % (HOST,), data=data, headers=headers)
        if r.status_code != 200:
            print r.status_code, r.content
            sys.exit(-1) 


if __name__ == '__main__':
    main()
