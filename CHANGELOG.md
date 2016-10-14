Percona Monitoring and Management (PMM) Server

v1.0.5 released 2016-10-14

* New tool: Orchestrator - a MySQL replication topology management and visualization tool. Available by /orchestrator URL.
* Added ProxySQL metrics and dashboard.
* Prometheus 1.1.3.
* Consul 0.7.0.
* Grafana data can be stored on data container to preserve your custom dashboards and settings. The predefined dashboards are still the subject of upgrade on new versions.
* Changed metric storage encoding to achieve less disk space usage by 50-70%.
* Re-use MySQL instance with saved data on Query Analytics when re-added through pmm-admin with the same name.
* Various dashboard improvements.
* Fixed rare issue when nginx tries to use IPv6 for localhost connections.
* Improvements and fixes to Query Analytics.

v1.0.4 released 2016-09-13

* Grafana 3.1.1.
* Prometheus 1.0.2.
* Added SSL and HTTP password protection.
* No extra `alias` label on Prometheus.
* Query Analytics App:
  * added sparkline charts to metrics
  * added search by query fingerprint
  * various fixes and improvements
* Added "MongoDB RocksDB", "PXC/Galera Cluster overview" dashboards.
* Visual amendments to the dashboards.
* Now you can save the predefined dashboards in place.
* Switched processes to non-root user inside the container.

v1.0.3 released 2016-08-05

* Fixed math for query metrics on Query Analytics.

v1.0.2 released 2016-07-28

* Grafana 3.1.0.
* Prometheus 1.0.1.
* Set default metrics retention to 30 days.
* Eliminated port 9001. Now the container uses only one configurable port, 80 by default.
* Eliminated the need to specify ADDRESS variable when creating docker container.
* Added support to name instances using the new pmm-admin.
* Query Analytics App:
  * redesigned queries profile table
  * redesigned metrics table
  * redesigned instance settings page
  * added sparkline charts
  * added ability to show more than 10 queries
* Various updates for the dashboards.

v1.0.1 released 2016-06-09

* Grafana 3.0.4.
* Prometheus 0.19.2.
* Added MongoDB dashboards.
* Replaced prom-config-api with Consul 0.6.4.
* Eliminated most of the ports for PMM server container (now only two: 9001 and configurable 80).
* Added "Server Summary" with aggregated query metrics to Query Analytics.
* MySQL dashboard updates, added "MySQL InnoDB Metrics Advanced" dashboard.
* Added options to configure Prometheus memory and retention.

v1.0.0 released 2016-04-17

* First release.
