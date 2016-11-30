Percona Monitoring and Management (PMM) Server

v1.0.7 unreleased 2016-11-30

* Added new widgets and graphs to "PXC/Galera Graphs" dashboard.
* Fixed hostgroup filtering for ProxySQL dashboard.
* Various fixes to MongoDB dashboards.
* Enabled HTTPS/TLS and basic authentication support on Prometheus targets.
* Grafana 4.0 with alerting engine.
* Prometheus 1.4.0.
* Consul 0.7.1 with snapshot/restore feature.
* Orchestrator 1.5.7.

v1.0.6 released 2016-11-15

* Prometheus 1.2.2.
* Added "Amazon RDS OS Metrics" dashboard and CloudWatch datasource.
* Added PMM Server to metrics monitoring: the underlying host appears on system and disk dashboards as "pmm-server".
* Query analytics data is now purged correctly: it was broken in 1.0.5 and keeping retention 1 day in 1.0.4.
* Query analytics data retention is made configurable with `QUERIES_RETENTION` option. Default: 8 days.
* Made the external static files local for PMM home page.
* Improvements and fixes to Query Analytics.
* Refactored MongoDB dashboards.
* Added "File Descriptors" graph to System Overview dashboard.
* Added "Mountpoint Usage" graph to Disk Space dashboard.

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
