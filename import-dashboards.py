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
import httplib
import fnmatch

import requests

GRAFANA_DB_DIR   = sys.argv[1] if len(sys.argv) > 1 else '/srv/grafana'
GRAFANA_IMG_DR   = '/usr/share/grafana/public/img/'
SCRIPT_DIR       = os.path.dirname(os.path.abspath(__file__))
DASHBOARD_DIR    = SCRIPT_DIR + '/dashboards/'
NEW_VERSION_FILE = SCRIPT_DIR + '/VERSION'
OLD_VERSION_FILE = GRAFANA_DB_DIR + '/PERCONA_DASHBOARDS_VERSION'
HOST             = 'http://127.0.0.1:3000'
LOGO_FILE        = '/usr/share/pmm-server/landing-page/img/pmm-logo.svg'
SET_OF_TAGS 	 = {'QAN': 0, 'OS': 0, 'MySQL': 0, 'MongoDB': 0, 'PostgreSQL': 0, 'HA': 0, 'Cloud': 0, 'Insight': 0, 'PMM': 0}
CONTENT          = '''<center>
<p>MySQL and InnoDB are trademarks of Oracle Corp. Proudly running Percona Server. Copyright (c) 2006-2018 Percona LLC.</p>
<div style='text-align:center;'>
<a href='https://percona.com/terms-use' style='display: inline;'>Terms of Use</a> | 
<a href='https://percona.com/privacy-policy' style='display: inline;'>Privacy</a> | 
<a href='https://percona.com/copyright-policy' style='display: inline;'>Copyright</a> | 
<a href='https://percona.com/legal' style='display: inline;'>Legal</a>
</div>
</center>
<hr>
<link rel='stylesheet' type='text/css' href='//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css' />
<script src='//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js'>
</script>
<script>
function bbb(){setTimeout(function (){window.cookieconsent.initialise({'palette': {'popup': {'background': '#eb6c44','text': '#ffffff'},'button': {'background': '#f5d948'}},'theme': 'classic','content': {'message': 'This site uses cookies and other tracking technologies to assist with navigation, analyze your use of our products and services, assist with promotional and marketing efforts, allow you to give feedback, and provide content from third parties. If you do not want to accept cookies, adjust your browser settings to deny cookies or exit this site.','dismiss': 'Allow cookies', 'link': 'Cookie Policy', 'href': 'https://www.percona.com/cookie-policy'}})},3000)};window.addEventListener('load',bbb());
</script>
'''


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


def delete_api_key(db_key, upgrade):
    con = sqlite3.connect(GRAFANA_DB_DIR + '/grafana.db', isolation_level="EXCLUSIVE")
    cur = con.cursor()

    cur.execute("DELETE FROM api_key WHERE key = ?", (db_key,))

    con.commit()
    con.close()


def fix_cloudwatch_datasource():
    """
    Replaces incorrect CloudWatch datasource stored as JSON string with correct JSON object.
    """

    con = sqlite3.connect(GRAFANA_DB_DIR + '/grafana.db', isolation_level="EXCLUSIVE")
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
    print ' * Datasources: %r %r' % (r.status_code, r.content)
    ds = [x['name'] for x in json.loads(r.content)]
    if 'Prometheus' not in ds:
        print ' * Adding Prometheus Data Source'
        data = json.dumps({'name': 'Prometheus', 'type': 'prometheus', 'jsonData': {'keepCookies': [], 'timeInterval': '1s'}, 'url': 'http://127.0.0.1:9090/prometheus/', 'access': 'proxy', 'isDefault': True})
        r = requests.post('%s/api/datasources' % HOST, data=data, headers=grafana_headers(api_key))
        print r.status_code, r.content
        if r.status_code != httplib.OK:
            print ' * Cannot add Prometheus Data Source'
            sys.exit(-1)
    else:
        print ' * Modifing Prometheus Data Source'
        r = requests.get('%s/api/datasources/name/Prometheus' % (HOST,), headers=grafana_headers(api_key))
        data = json.loads(r.content)
        data['jsonData']['timeInterval']='1s'
        data['readOnly'] = False
        r = requests.put('%s/api/datasources/%i' % (HOST, data['id']), data=json.dumps(data), headers=grafana_headers(api_key))
        print r.status_code, r.content
        if r.status_code != 200:
            print ' * Cannot modify Prometheus Data Source'
            sys.exit(-1)

    if 'CloudWatch' not in ds:
        print ' * Adding CloudWatch Data Source'
        data = json.dumps({'name': 'CloudWatch', 'type': 'cloudwatch', 'jsonData': {'authType': 'keys'}, 'access': 'proxy', 'isDefault': False})
        r = requests.post('%s/api/datasources' % HOST, data=data, headers=grafana_headers(api_key))
        print r.status_code, r.content
        if r.status_code != httplib.OK:
            print ' * Cannot add CloudWatch Data Source'
            sys.exit(-1)

    if 'QAN-API' not in ds:
        print ' * QAN-API Data Source'
        data = json.dumps({
            'name': 'QAN-API',
            'type': 'mysql',
            'url': 'localhost:3306',
            'access': 'proxy',
            'jsonData': {},
            'secureJsonFields': {},
            'database': 'pmm',
            'user': 'grafana',
            'password': 'N9mutoipdtlxutgi9rHIFnjM'
        })
        r = requests.post('%s/api/datasources' % HOST, data=data, headers=grafana_headers(api_key))
        print r.status_code, r.content
        if r.status_code != httplib.OK:
            print ' * Cannot add QAN-API Data Source'
            sys.exit(-1)


def copy_apps():
    for app in ['pmm-app']:
        source_dir = '/usr/share/percona-dashboards/' + app
        dest_dir = '/var/lib/grafana/plugins/' + app
        if os.path.isdir(source_dir):
            print ' * Copying %r' % (app,)
            shutil.rmtree(dest_dir, True)
            shutil.copytree(source_dir, dest_dir)


def import_apps(api_key):
    for app in ['pmm-app']:
        print ' * Importing %r' % (app,)
        data = json.dumps({'enabled': False})
        r = requests.post('%s/api/plugins/%s/settings' % (HOST, app), data=data, headers=grafana_headers(api_key))
        print ' * Plugin disable result: %r %r' % (r.status_code, r.content)
        if r.status_code != httplib.OK:
            print ' * Cannot dissable %s app' % app
            sys.exit(-1)

        data = json.dumps({'enabled': True})
        r = requests.post('%s/api/plugins/%s/settings' % (HOST, app), data=data, headers=grafana_headers(api_key))
        print ' * Plugin enable result: %r %r' % (r.status_code, r.content)
        if r.status_code != httplib.OK:
            print ' * Cannot enable %s app' % app
            sys.exit(-1)


def get_folders(api_key):
    r = requests.get('%s/api/folders' % (HOST,), headers=grafana_headers(api_key))
    for x in json.loads(r.content):
        SET_OF_TAGS[x['title']] = x['id']


def add_folders(api_key):
    for folder in SET_OF_TAGS.keys():
        print ' * Creating folder %r' % (folder,)

        data = json.dumps({'title': folder})
        r = requests.post('%s/api/folders' % (HOST), data=data, headers=grafana_headers(api_key))
        print '   * Result: %r %r' % (r.status_code, r.content)
        if r.status_code != httplib.OK:
            continue

        data = json.loads(r.text)
        print '   * Folder ID: %r' % (data['id'])
        SET_OF_TAGS[folder] = data['id']


def move_into_folders():
    print ' * Moving dashboards into folders'
    con = sqlite3.connect(GRAFANA_DB_DIR + '/grafana.db', isolation_level='EXCLUSIVE')
    cur = con.cursor()
    cur.execute('SELECT data FROM dashboard WHERE is_folder = 0')
    for row in cur.fetchall():
        try:
            data = json.loads(row[0])
            tag = data['tags'][0]
        except:
            continue
        if tag == 'Percona':
            try:
                tag = data['tags'][1]
            except:
                continue
        try:
            print '   * Uid: %r, Dashboard: %r, Tags: %r' % (data['uid'],data['title'],data['tags'])
            print '   * First Tag: %s' % (tag)
            cur.execute('UPDATE dashboard SET folder_id = ? WHERE uid = ?', (SET_OF_TAGS[tag], data['uid']))
            print '   * Moved to the Folder with Id: %s' % (SET_OF_TAGS[tag])
        except Exception as err:
            print '   * Moving dashboard %s is failed: %s' % (data['title'], str(err))

    con.commit()
    con.close()


def add_demo_footer():
    # Add Copyright&Legal footer into dashboards
    # It's used only for a pmmdemo installation
    print ' * adding Copyright&Legal footer into dashboards'
    source_dir = '/usr/share/percona-dashboards/pmm-app/dist/dashboards/'
    dirs = os.listdir(source_dir)

    for d_file in dirs:
        if fnmatch.fnmatch(d_file, 'pmm-*.json'):
            continue

        with open(source_dir + d_file, 'r') as dashboard_file:
            dashboard = json.loads(dashboard_file.read())

        add_item = {
            'collapsed': False,
            'gridPos': {
                'h': 1,
                'w': 24,
                'x': 0,
                'y': 99
            },
            'id': 9998,
            'panels': [],
            'title': 'Copyrights & Legal',
            'type': 'row'
        }
        dashboard['panels'].append(add_item)

        add_item = {
            'content': CONTENT,
            'gridPos': {
                'h': 3,
                'w': 24,
                'x': 0,
                'y': 99
            },
            'id': 9999,
            'links': [],
            'mode': 'html',
            'title': '',
            'transparent': True,
            'type': 'text'
        }
        dashboard['panels'].append(add_item)

        dashboard_json = json.dumps(dashboard, sort_keys=True, indent=4, separators=(',', ': '))

        with open(source_dir + d_file, 'w') as dashboard_file:
            dashboard_file.write(dashboard_json)
            dashboard_file.write('\n')
            print 'Dashboard -> %s - %s' % (d_file, 'Done')


def set_home_dashboard(api_key):
    # Get dashboard information by dashboard slug (name) which is "home-dashboard" in our case
    # This API is different from /api/dashboards/home which returns home dashboard
    r = requests.get('%s/api/dashboards/db/home-dashboard' % (HOST,), headers=grafana_headers(api_key))
    print ' * "home" dashboard: %r %r' % (r.status_code, r.content)
    if r.status_code != httplib.OK:
        # TODO sys.exit(-1)
        return

    res = json.loads(r.content)

    data = json.dumps({'homeDashboardId': res['dashboard']['id']})
    r = requests.put('%s/api/user/preferences' % (HOST,), data=data, headers=grafana_headers(api_key))
    print ' * Preferences set: %r %r' % (r.status_code, r.content)

    # Copy pmm logo to the grafana directory
    if os.path.isfile(LOGO_FILE) and os.access(LOGO_FILE, os.R_OK):
        print ' * Copying %r to grafana directory %r' % (LOGO_FILE, GRAFANA_IMG_DR)
        shutil.copy(LOGO_FILE, GRAFANA_IMG_DR)

    # # Set home dashboard.
    # cur.execute("REPLACE INTO star (user_id, dashboard_id) "
    #             "SELECT 1, id from dashboard WHERE slug='home'")
    # cur.execute("REPLACE INTO preferences (id, org_id, user_id, version, home_dashboard_id, timezone, theme, created, updated) "
    #             "SELECT 1, 1, 0, 0, id, '', '', datetime('now'), datetime('now') from dashboard WHERE slug='home'")


def main():
    print "Grafana database directory: %s" % (GRAFANA_DB_DIR,)
    upgrade = check_dashboards_version()

    name, api_key, db_key = get_api_key()

    # modify database when Grafana is stopped to avoid a data race
    stop_grafana()
    try:
      #  add_demo_footer()
        copy_apps()
        add_api_key(name, db_key)
        fix_cloudwatch_datasource()
    finally:
        start_grafana()

    wait_for_grafana_start()

    add_datasources(api_key)
    add_folders(api_key)
    get_folders(api_key)
    import_apps(api_key)
    move_into_folders()

    # restart Grafana to load app and set home dashboard below
    stop_grafana()
    start_grafana()
    wait_for_grafana_start()
    time.sleep(10)

    set_home_dashboard(api_key)

    # modify database when Grafana is stopped to avoid a data race
    stop_grafana()
    try:
        delete_api_key(db_key, upgrade)
    finally:
        start_grafana()

    shutil.copyfile(NEW_VERSION_FILE, OLD_VERSION_FILE)


if __name__ == '__main__':
    main()
