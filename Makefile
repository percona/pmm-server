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


build-password-page: build-password-page-docker build-password-page-ami build-password-page-ovf

build-password-page-docker:
	cd password-page/ \
	&& npm install \
	&& npm run build:docker

build-password-page-ami:
	cd password-page/ \
	&& npm install \
	&& npm run build:ami

build-password-page-ovf:
	cd password-page/ \
	&& npm install \
	&& npm run build:ovf

