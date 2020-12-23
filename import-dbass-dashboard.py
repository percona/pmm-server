#!/usr/bin/env python

# Grafana dashboard importer script.

import base64
import binascii
import hashlib
import json
import os
import random
import sqlite3
import string
import subprocess
import sys
import time
import httplib
import requests

GRAFANA_DB_DIR             = sys.argv[1] if len(sys.argv) > 1 else '/srv/grafana'
HOST                       = 'http://127.0.0.1:3000'
DBAAS                      = os.getenv('PERCONA_TEST_DBAAS') is not None


def grafana_headers(api_key):
    """
    Returns HTTP headers for all requests to Grafana.
    """

    return {'Authorization': 'Bearer %s' % (api_key,), 'Content-Type': 'application/json'}


def get_api_key():
    """
    Generates a new API key and returns its name, representation for API, and representation for DB.

    Keep in sync with Grafana implementation:
    * https://sourcegraph.com/github.com/grafana/grafana/-/blob/pkg/api/apikey.go
    * https://sourcegraph.com/github.com/grafana/grafana/-/blob/pkg/components/apikeygen/apikeygen.go
    * https://sourcegraph.com/github.com/grafana/grafana/-/blob/pkg/util/encoding.go
    """

    alphanum = string.digits + string.ascii_uppercase + string.ascii_uppercase.lower()
    name = 'PMM Import ' + ''.join(random.choice(alphanum) for _ in range(16))
    key = ''.join(random.choice(alphanum) for _ in range(32))
    api_key = base64.b64encode(json.dumps({'k': key, 'n': name, 'id': 1}))
    db_key = binascii.hexlify(hashlib.pbkdf2_hmac('sha256', key, name, 10000, 50))
    return (name, api_key, db_key)


def start_grafana():
    res = None
    if os.path.exists('/usr/bin/supervisorctl'):
        res = subprocess.call(["/usr/bin/supervisorctl", "start", "grafana"])
    else:
        res = subprocess.call(["/bin/systemctl", "start", "grafana-server"])
    print ' * Grafana start: %r.' % (res,)


def stop_grafana():
    res = None
    if os.path.exists('/usr/bin/supervisorctl'):
        res = subprocess.call(["/usr/bin/supervisorctl", "stop", "grafana"])
    else:
        res = subprocess.call(["/bin/systemctl", "stop", "grafana-server"])
    print ' * Grafana stop: %r.' % (res,)

    # wait for full stop
    time.sleep(5)


def wait_for_grafana_start():
    sys.stdout.write(' * Waiting for Grafana to start')
    sys.stdout.flush()
    for _ in xrange(60):
        try:
            requests.get('%s/api/datasources' % HOST, timeout=0.1)
        except (requests.exceptions.ConnectionError, requests.exceptions.ReadTimeout):
            sys.stdout.write('.')
            sys.stdout.flush()
            time.sleep(1)
        else:
            print
            return
    print "\n * Grafana is unable to start correctly"
    sys.exit(-1)


def add_api_key(name, db_key):
    con = sqlite3.connect(GRAFANA_DB_DIR + '/grafana.db', isolation_level="EXCLUSIVE")
    cur = con.cursor()

    cur.execute("REPLACE INTO api_key (org_id, name, key, role, created, updated) "
                "VALUES (1, ?, ?, 'Admin', datetime('now'), datetime('now'))", (name, db_key))

    con.commit()
    con.close()


def delete_api_key(db_key):
    con = sqlite3.connect(GRAFANA_DB_DIR + '/grafana.db', isolation_level="EXCLUSIVE")
    cur = con.cursor()

    cur.execute("DELETE FROM api_key WHERE key = ?", (db_key,))

    con.commit()
    con.close()


def add_dbaas_dashboard(api_key):
    if not DBAAS:
        print ' * DBaaS is disabled'
        r = requests.get('%s/api/dashboards/uid/pmm-dbaas' % (HOST,), headers=grafana_headers(api_key))
        if r.status_code == httplib.OK:
            print '   * Removing DBaaS dashboard'
            r = requests.delete('%s/api/dashboards/uid/pmm-dbaas' % (HOST,), headers=grafana_headers(api_key))
            if r.status_code != httplib.OK:
                print r.status_code, r.content
        return

    print ' * DBaaS is enabled'
    r = requests.get('%s/api/dashboards/uid/pmm-dbaas' % (HOST,), headers=grafana_headers(api_key))
    if r.status_code != httplib.OK:
        print '   * Adding DBaaS dashboard'
        with open('/usr/share/percona-dashboards/pmm-app/dist/dashboards/pmm-dbaas.json', 'r') as dashboard_file:
            dashboard = json.loads(dashboard_file.read())
        data = json.dumps({'dashboard': dashboard})
        r = requests.post('%s/api/dashboards/import' % (HOST,), data=data, headers=grafana_headers(api_key))
        if r.status_code != httplib.OK:
            print r.status_code, r.content
    else:
       print '   * DBaaS dashboard has already been added'


def main():

    name, api_key, db_key = get_api_key()
    # set a waiting period to start supervisord
    time.sleep(10)

    # modify database when Grafana is stopped to avoid a data race
    stop_grafana()
    try:
        add_api_key(name, db_key)
    finally:
        start_grafana()

    wait_for_grafana_start()

    add_dbaas_dashboard(api_key)

    # modify database when Grafana is stopped to avoid a data race
    stop_grafana()
    try:
        delete_api_key(db_key)
    finally:
        start_grafana()

if __name__ == '__main__':
    main()
