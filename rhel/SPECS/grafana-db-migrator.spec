%undefine _missing_build_ids_terminate_build

%global release_hash b61138937c3a25c49be5548150a9df7e23f74d27

Name:           grafana-db-migrator
Version:        0.0.1
Release:	    1%{?dist}
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
install -m 755 dist/grafana-migrate %{buildroot}%{_sbindir}/


%files
%{_sbindir}/grafana-migrate

%changelog
* Tue Nov 02 2021 Nikita Beletskii <nikita.beletskii@percona.com> - 0.0.1-1
- Creating package for grafana-db-migrator

