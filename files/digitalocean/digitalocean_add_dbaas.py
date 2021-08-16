#!/usr/bin/env python

"""
This script adds DigitalOcean DBaaS instances to a Percona Monitoring and Management 
(PMM) host running on the local server. Currently only MySQL DBaaS instances are supported.
"""

from __future__ import print_function
import os
import sys
import argparse
import pprint
import requests
from requests.packages.urllib3.exceptions import InsecureRequestWarning
from random import choice
from string import ascii_letters, digits


class PmmServer:
    def __init__(self, baseURL="https://127.0.0.1:443", serverAdminPassword=None):
        self.baseURL = baseURL
        self.password = serverAdminPassword
    
    def listServices(self):
        requests.packages.urllib3.disable_warnings(InsecureRequestWarning)

        
        body = {
            "service_type": "MYSQL_SERVICE"
        }
        endpoint = self.baseURL + "/v1/inventory/Services/List"
        try:
            r = requests.post(endpoint, json=body, verify=False, auth=('admin', self.password))
            r.raise_for_status()
        except requests.exceptions.HTTPError as e:
            if r.status_code == 401:
                print("Invalid PMM admin password.")
            else:
                jsonResponse = r.json()
                print(jsonResponse['error'])
            sys.exit(1) 
        except requests.exceptions.RequestException as e:
            print('Could not connect to PMM instance at {}'.format(self.baseURL))
            sys.exit(1)
    
        return r.json()
    
    def addMySQL(self, mysqlInstance):
        """
        Given a dict representing a DBaaS MySQL instance, add it to PMM
        """
        print("Adding instance {} to PMM...".format(mysqlInstance.name))
    
        mysqlInstance.createMonitoringUser()
        
        requests.packages.urllib3.disable_warnings(InsecureRequestWarning)

        
        body = {
          "add_node": {
            "node_type": "REMOTE_NODE",
            "node_name": mysqlInstance.name,
            "region": mysqlInstance.region
          },
          "service_name": mysqlInstance.name,
          "address": mysqlInstance.address,
          "port": mysqlInstance.port,
          "pmm_agent_id": 'pmm-server',
          "username": mysqlInstance.admin_username,
          "password": mysqlInstance.admin_password,
          "qan_mysql_perfschema": True,
          "skip_connection_check": False,
          "disable_query_examples": True,
          "tls": True,
          "tls_skip_verify": True,
          "tablestats_group_table_limit": 0
        }
        addURL = self.baseURL + "/v1/management/MySQL/Add"
        try:
            r = requests.post(addURL, json=body, verify=False, auth=('admin', self.password))
            r.raise_for_status()
        except requests.exceptions.HTTPError:
            jsonResponse = r.json()
            if r.status_code == 409:
                # Node/instance already exists
                print(jsonResponse['error'])
            else:
                print(jsonResponse['error'])
        except Exception as err:
            print(err)
    
        return        

class DbaasInstance:

    def __init__(self, instanceAttributes, pmmServer):
        self.name = instanceAttributes['name']
        self.region = instanceAttributes['region']
        self.address = instanceAttributes['connection']['host']
        self.port = instanceAttributes['private_connection']['port']
        self.admin_username = instanceAttributes['private_connection']['user']
        self.admin_password = instanceAttributes['private_connection']['password']
        self.engine = instanceAttributes['engine']
        self.monitored = self.instanceMonitored(pmmServer)

    
    def generatePassword(self):
        password = ''.join([choice(ascii_letters + digits)
                    for n in range(32)])
        return password
    
    def createMonitoringUser(self):
        self.monitoring_username = 'pmm'
        self.monitoring_password = self.generatePassword()
        return
    
    def instanceMonitored(self, pmmServer):
        """
        Return boolean based on if an instance is monitored according to PMM API
        """
        services = pmmServer.listServices()
        try:
            mysqlServices = services['mysql']
        except KeyError:
            mysqlServices = []
        if (self.address, self.port) in [ (i['address'], i['port']) for i in mysqlServices]:
            return True
        else:
            return False


def getAPIToken():
    token = os.environ.get('DIGITALOCEAN_API_TOKEN')
    if not token:
        token = raw_input("Enter your DigitalOcean API token: ")
    return token

def getPMMAdminPassword():
    password = os.environ.get('PMM_ADMIN_PASSWORD')
    if not password:
        token = raw_input("Enter the password for the PMM 'admin' user: ")
    return password

def getDBInstances(token):
    """
    Fetch all DBaaS instances from DigitalOcean API
    """
    auth_header = {"Authorization": "Bearer {}".format(token)}
    try:
        r = requests.get('https://api.digitalocean.com/v2/databases', headers=auth_header)
        r.raise_for_status()
    except requests.exceptions.HTTPError as e:
        if r.status_code == 401:
            print("Invalid DigitalOcean API token.")
        else:
            jsonResponse = r.json()
            print(jsonResponse['error'])
        sys.exit(1) 
    except Exception as err:
        print(err)  
        sys.exit(1) 
    return r.json()['databases']

def promptForDBSelection(instances):
    """
    Display list of eligible DBaaS instances and prompt user to enter selection. 
    Returns list if selected instances.
    """
    selectedInstances = []
    print('Eligible DBaaS instances found:') 
    for instance in instances:
        print('- {}'.format(instance.name), end = '')
        if instance.monitored:
            print(' (monitored)')
        else:
            print('')
    try:
        user_input = raw_input('Enter comma-separated list of database names to monitor [all]: ')
    except (KeyboardInterrupt, EOFError):
        print('')
        sys.exit(0)
    if len(user_input) == 0:
        selectedInstanceNames = ['all']
    else:
        selectedInstanceNames = [ s.strip() for s in user_input.split(',') ]
    if 'all' in selectedInstanceNames:
        validInstances = instances
    else:
        validInstances = [ i for i in instances if i.name in selectedInstanceNames ]
    return validInstances

def getPublicIPv4():
    """
    Return the public IPv4 address of localhost
    """
    try:
        r = requests.get("http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/address")
        r.raise_for_status()
    except requests.exceptions.HTTPError:
        jsonResponse = r.json()
        print(jsonResponse['error'])
    except Exception as err:
        print(err)
    return r.content

def printBanner():
    print(
"""
# This script adds DigitalOcean DBaaS instances to a Percona Monitoring and Management 
# (PMM) host running on the local server. Currently only MySQL DBaaS instances are supported.
# 
# Before attempting to add DBaaS instances, make sure you have logged in to the Percona 
# Monitoring and Management GUI and set an admin password using this URL:
# 
# http://{}/
#
# Ensure that PMM is able to connect to your DBaaS instances by adding the PMM server
# to each database's Trusted Sources list here: https://cloud.digitalocean.com/databases.
# 
# This script will prompt for your PMM password and DigitalOcean API token which can 
# be generated at https://cloud.digitalocean.com/account/api/tokens (read-only permissions
# are sufficient). You can set these using environment variables:
# 
# export DIGITALOCEAN_API_TOKEN=<_your_API_token_>
# export PMM_ADMIN_PASSWORD=<_your_PMM_password_>
""".format(getPublicIPv4())
)


def main(arguments):

    printBanner()
    
    digitalocean_api_token = getAPIToken()
    pmm_admin_password = getPMMAdminPassword()
    pmm = PmmServer(serverAdminPassword=pmm_admin_password)
    
    instanceProperties = getDBInstances(digitalocean_api_token)
    eligibleInstances = [ DbaasInstance(i, pmm) for i in instanceProperties if i['engine'] in ['mysql']]
    selectedInstances = promptForDBSelection(eligibleInstances)
    for instance in selectedInstances:
        if instance.monitored:
            print('Instance "{}" is already monitored by PMM.'.format(instance.name))
            continue
        if instance.engine == 'mysql':
            pmm.addMySQL(instance)

if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))