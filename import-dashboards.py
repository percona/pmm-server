#!/usr/bin/env python

# Grafana dashboard importer script.

import base64
import binascii
import hashlib
import json
import os
import random
import shutil
import sqlite3
import string
import subprocess
import sys
import time

import requests

GRAFANA_DB_DIR   = sys.argv[1] if len(sys.argv) > 1 else '/var/lib/grafana'
SCRIPT_DIR       = os.path.dirname(os.path.abspath(__file__))
DASHBOARD_DIR    = SCRIPT_DIR + '/dashboards/'
NEW_VERSION_FILE = SCRIPT_DIR + '/VERSION'
OLD_VERSION_FILE = GRAFANA_DB_DIR + '/PERCONA_DASHBOARDS_VERSION'
HOST             = 'http://127.0.0.1:3000'


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


def check_dashboards_version():
    upgrade = False

    with open(NEW_VERSION_FILE, 'r') as f:
        new_ver = f.read().strip()

    old_ver = 'N/A'
    if os.path.exists(OLD_VERSION_FILE):
        upgrade = True
        with open(OLD_VERSION_FILE, 'r') as f:
            old_ver = f.read().strip()
            print ' * Dashboards upgrade from version %s to %s.' % (old_ver, new_ver)

    if old_ver == new_ver:
        print ' * The dashboards are up-to-date (%s).' % (old_ver,)
        sys.exit(0)

    return upgrade


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
    con = sqlite3.connect(GRAFANA_DB_DIR + '/grafana.db')
    cur = con.cursor()

    cur.execute("REPLACE INTO api_key (org_id, name, key, role, created, updated) "
                "VALUES (1, ?, ?, 'Admin', datetime('now'), datetime('now'))", (name, db_key))

    con.commit()
    con.close()


def delete_api_key(db_key, upgrade):
    con = sqlite3.connect(GRAFANA_DB_DIR + '/grafana.db')
    cur = con.cursor()

    # Set home dashboard.
    if not upgrade:
        cur.execute("REPLACE INTO star (user_id, dashboard_id) "
                    "SELECT 1, id from dashboard WHERE slug='cross-server-graphs'")
        cur.execute("REPLACE INTO preferences (id, org_id, user_id, version, home_dashboard_id, timezone, theme, created, updated) "
                    "SELECT 1, 1, 0, 0, id, '', '', datetime('now'), datetime('now') from dashboard WHERE slug='cross-server-graphs'")

    # Delete key.
    cur.execute("DELETE FROM api_key WHERE key = ?", (db_key,))

    con.commit()
    con.close()


def fix_cloudwatch_datasource():
    """
    Replaces incorrect CloudWatch datasource stored as JSON string with correct JSON object.
    """

    con = sqlite3.connect(GRAFANA_DB_DIR + '/grafana.db')
    cur = con.cursor()

    found = False
    cur.execute("SELECT id, json_data FROM data_source WHERE name = 'CloudWatch'")
    for row in cur.fetchall():
        found = True

        old = None
        try:
            old = json.loads(row[1])
        except:
            pass

        if not isinstance(old, dict):
            new = {'authType': 'keys'}
            cur.execute("UPDATE data_source SET json_data = ? WHERE id = ?", (json.dumps(new), row[0]))

    con.commit()
    con.close()


def add_datasources(api_key):
    r = requests.get('%s/api/datasources' % (HOST,), headers=grafana_headers(api_key))
    print r.status_code, r.content
    ds = [x['name'] for x in json.loads(r.content)]
    if 'Prometheus' not in ds:
        data = json.dumps({'name': 'Prometheus', 'type': 'prometheus', 'url': 'http://127.0.0.1:9090/prometheus/', 'access': 'proxy', 'isDefault': True})
        r = requests.post('%s/api/datasources' % HOST, data=data, headers=grafana_headers(api_key))
        print r.status_code, r.content
        if r.status_code != 200:
            print ' * Cannot add Prometheus Data Source'
            sys.exit(-1)

    if 'CloudWatch' not in ds:
        data = json.dumps({'name': 'CloudWatch', 'type': 'cloudwatch', 'jsonData': {'authType': 'keys'}, 'access': 'proxy', 'isDefault': False})
        r = requests.post('%s/api/datasources' % HOST, data=data, headers=grafana_headers(api_key))
        print r.status_code, r.content
        if r.status_code != 200:
            print ' * Cannot add CloudWatch Data Source'
            sys.exit(-1)


def import_dashboards(api_key):
    # Import dashboards with overwrite.
    files = []
    for f in os.listdir(DASHBOARD_DIR):
        if not f.endswith('.json'):
            continue

        files.append(DASHBOARD_DIR + f)

    for file_ in files:
        print file_
        f = open(file_, 'r')
        dash = json.load(f)
        f.close()

        # Set time range and refresh options.
        dash['time']['from'] = 'now-1h'
        dash['time']['to'] = 'now'
        dash['refresh'] = '1m'

        data = json.dumps({'dashboard': dash, 'overwrite': True})
        r = requests.post('%s/api/dashboards/db' % HOST, data=data, headers=grafana_headers(api_key))
        if r.status_code != 200:
            print r.status_code, r.content
            print ' * Cannot add %s Dashboard' % file_
            sys.exit(-1)


def copy_apps():
    for app in ['pmm-app']:
        source_dir = '/usr/share/percona-dashboards/' + app
        dest_dir = '/var/lib/grafana/plugins/' + app
        if os.path.isdir(source_dir):
            print app
            shutil.rmtree(dest_dir, True)
            shutil.copytree(source_dir, dest_dir)


def import_apps(api_key):
    for app in ['pmm-app']:
        print app
        data = json.dumps({'enabled': True})
        r = requests.post('%s/api/plugins/%s/settings' % (HOST, app), data=data, headers=grafana_headers(api_key))
        if r.status_code != 200:
            print r.status_code, r.content
            print ' * Cannot add %s app' % app
            sys.exit(-1)


def main():
    upgrade = check_dashboards_version()

    name, api_key, db_key = get_api_key()

    # modify database when Grafana is stopped to avoid a data race
    stop_grafana()
    try:
        copy_apps()
        add_api_key(name, db_key)
        fix_cloudwatch_datasource()
    finally:
        start_grafana()

    wait_for_grafana_start()

    add_datasources(api_key)
    import_apps(api_key)
    import_dashboards(api_key)

    # modify database when Grafana is stopped to avoid a data race
    stop_grafana()
    try:
        delete_api_key(db_key, upgrade)
    finally:
        start_grafana()

    shutil.copyfile(NEW_VERSION_FILE, OLD_VERSION_FILE)


if __name__ == '__main__':
    main()
