init:
	git config core.hooksPath .githooks
	docker run -d -p 443:443 --name pmm-server-tmp percona/pmm-server:1.7.0
	docker exec -it pmm-server-tmp sed -i'' -e 's^/pmm/^/laboratory/^' /etc/yum.repos.d/pmm.repo
	docker exec -it pmm-server-tmp yum-config-manager --enable percona-testing-x86_64

check:
	docker exec -it pmm-server-tmp sqlite3 /var/lib/grafana/grafana.db "select * from star;"


reimport:
	#docker exec -it pmm-server-tmp rm /var/lib/grafana/PERCONA_DASHBOARDS_VERSION
	docker cp import-dashboards.py pmm-server-tmp:/usr/share/percona-dashboards/import-dashboards.py
	docker exec -it pmm-server-tmp /usr/share/percona-dashboards/import-dashboards.py /var/lib/grafana


rm:
	docker rm -f pmm-server-tmp

build-installation-wizard-page:
	cd installation-wizard-page/ && npm i && npm run build
