%undefine _missing_build_ids_terminate_build

%global release_hash 4a5ecc313655cf645bf73d7355d354d7b5206281

Name:           grafana-db-migrator
Version:        1.0.0
Release:        1%{?dist}
Summary:        A tool for Grafana database migration
License:        MIT
URL:            https://github.com/percona/grafana-db-migrator
Source0:        https://github.com/percona/grafana-db-migrator/archive/%{release_hash}.tar.gz

%description
%{summary}

%prep
%setup -q -n grafana-db-migrator-%{release_hash}

%build
make

%install
mkdir -p %{buildroot}/usr/sbin/
install -m 755 dist/grafana-db-migrator %{buildroot}%{_sbindir}/


%files
%{_sbindir}/grafana-db-migrator

%changelog
* Tue Nov 02 2021 Nikita Beletskii <nikita.beletskii@percona.com> - 1.0.1-1
- Creating package for grafana-db-migrator

