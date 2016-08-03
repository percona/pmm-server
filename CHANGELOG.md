Percona Monitoring and Management (PMM) Server

v1.0.2 released 2016-07-28

* Grafana 3.1.0.
* Prometheus 1.0.1.
* Set default metrics retention to 30 days.
* Eliminated port 9001. Now the container uses only one configurable port, 80 by default.
* Eliminated the need to specify ADDRESS variable when creating docker container.
* Added support to name instances using the new pmm-admin.
* Query Analytics App:
  * Redesigned queries profile table
  * Redesigned metrics table
  * Redesigned instance settings page
  * Added sparkline charts
  * Added ability to show more than 10 queries
* Various updates for the dashboards.

v1.0.1 released 2016-06-09

* Grafana 3.0.4.
* Prometheus 0.19.2.
* Added MongoDB dashboards.
* Replaced prom-config-api with Consul 0.6.4.
* Eliminated most of the ports for PMM server container (now only two: 9001 and configurable 80).
* Added "Server Summary" with aggregated query metrics to QAN app.
* MySQL dashboard updates, added "MySQL InnoDB Metrics Advanced" dashboard.
* Added options to configure Prometheus memory and retention.

v1.0.0 released 2016-04-17

* First release.
