%define build_timestamp %(date -u +"%y%m%d%H%M")
%define release         4

Name:           grafana-db-migrator
Version:        0.0.1
Release:	    1%{?dist}
Summary:        A tool for Grafana database migration
License:        MIT
URL:            https://github.com/percona/grafana-db-migrator
Source0:        https://github.com/percona/grafana-db-migrator/archive/b61138937c3a25c49be5548150a9df7e23f74d27.tar.gz

%description
%{summary}

%prep
%setup -q -n b61138937c3a25c49be5548150a9df7e23f74d27.tar.gz

%build
make

%install
install -m 755 hello-world.sh %{buildroot}/usr/bin/hello-world.sh


%files
%{_sbindir}/grafana-db-migrator/dist/grafana-migrate


%changelog
* Tue Nov 02 2021 Nikita Beletskii <nikita.beletskii@percona.com> - 0.0.1-1
- Creating package for grafana-db-migrator

