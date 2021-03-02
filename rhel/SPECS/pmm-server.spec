%global provider	github
%global provider_tld	com
%global project		percona
%global repo		pmm-server
%global provider_prefix	%{provider}.%{provider_tld}/%{project}/%{repo}
%global import_path	%{provider_prefix}
%global commit	        0dbbc0ca255591000f0371012cd4e7515624a059
%global shortcommit	%(c=%{commit}; echo ${c:0:7})
%define build_timestamp %(date -u +"%y%m%d%H%M")
%global pmm_repo        pmm
%global pmm_prefix      %{provider}.%{provider_tld}/%{project}/%{pmm_repo}
%global pmm_commit      @@pmm_commit@@
%global pmm_shortcommit %(c=%{pmm_commit}; echo ${c:0:7})
%define release         21
%define rpm_release     %{release}.%{build_timestamp}.%{shortcommit}%{?dist}

Name:		%{repo}
Version:	%{version}
Release:	%{rpm_release}
Summary:	Percona Monitoring and Management Server

License:	AGPLv3
URL:		https://%{provider_prefix}
Source0:	https://%{provider_prefix}/archive/%{commit}/%{repo}-%{shortcommit}.tar.gz
Source1:	https://%{pmm_prefix}/archive/%{pmm_commit}/%{pmm_repo}-%{pmm_shortcommit}.tar.gz

BuildArch:	noarch
Requires:	nginx ansible git bats
BuildRequires:	openssl

%description
Percona Monitoring and Management (PMM) Server.
See the PMM docs for more information.


%prep
%setup -q -n %{repo}-%{commit}


%build
make build-installation-wizard-page

%install
tar -zxvf %SOURCE1
install -d %{buildroot}%{_sysconfdir}/nginx/conf.d
mv nginx.conf %{buildroot}%{_sysconfdir}/nginx/conf.d/pmm.conf
mv nginx-ssl.conf %{buildroot}%{_sysconfdir}/nginx/conf.d/pmm-ssl.conf
install -d %{buildroot}%{_datadir}/percona-dashboards
mv import-dashboards.py %{buildroot}%{_datadir}/percona-dashboards/import-dashboards.py

mv prometheus.yml %{buildroot}%{_sysconfdir}/prometheus.yml
mv alertmanager.yml %{buildroot}%{_sysconfdir}/alertmanager.yml

install -d %{buildroot}%{_sysconfdir}/clickhouse-server

install -d %{buildroot}%{_sysconfdir}/supervisord.d
mv supervisord.conf %{buildroot}%{_sysconfdir}/supervisord.d/pmm.ini

install -d %{buildroot}%{_datadir}/%{name}/landing-page/img
cp -pav ./entrypoint.sh %{buildroot}%{_datadir}/%{name}/entrypoint.sh
cp -pav ./landing-page/img/pmm-logo.svg %{buildroot}%{_datadir}/%{name}/landing-page/img/pmm-logo.svg
cp -pav ./installation-wizard-page/build %{buildroot}%{_datadir}/%{name}/installation-wizard-page
cp -pav ./%{pmm_repo}-%{pmm_commit}/api/swagger %{buildroot}%{_datadir}/%{name}/swagger
install -d %{buildroot}%{_datadir}/%{name}/static
cp -pav ./local-rss.xml %{buildroot}%{_datadir}/%{name}/static/local-rss.xml
rm -rf %{pmm_repo}-%{pmm_commit}


%files
%license LICENSE
%doc README.md CHANGELOG.md
%{_sysconfdir}/supervisord.d
%{_sysconfdir}/prometheus.yml
%{_sysconfdir}/alertmanager.yml
%{_sysconfdir}/nginx/conf.d/pmm.conf
%{_sysconfdir}/nginx/conf.d/pmm-ssl.conf
%{_datadir}/percona-dashboards/import-dashboards.py*
%{_datadir}/%{name}


%changelog
* Mon Jun 22 2020 Andrii Skomorokhov <andrii.sokmorokhov@percona.com> - 2.7.1-21
- PMM-6153 PMM 2.7 nginx restarts when there is no outbound internet connectivity

* Thu Apr 11 2019 Vadim Yalovets <vadim.yalovets@percona.com> - 2.0.0-4
- PMM-3606 get the latest version of Swagger

* Mon Mar 18 2019 Vadim Yalovets <vadim.yalovets@percona.com> - 2.0.0-3
- PMM-3677 remove Orchestrator from pmm2

* Fri Mar 15 2019 Vadim Yalovets <vadim.yalovets@percona.com> - 2.0.0-2
- PMM-3606 Serve new Swagger spec and UI

* Tue Dec  4 2018 Vadim Yalovets <vadim.yalovets@percona.com> - 2.0.0-1
- PMM-3176 Remove Prometheus 1.x

* Thu Nov 15 2018 Vadim Yalovets <vadim.yalovets@percona.com> - 1.12.0-13
- PMM-2911 PMM with Clickhouse

* Mon Jun 18 2018 Mykola Marzhan <mykola.marzhan@percona.com> - 1.12.0-11
- PMM-2629 add prometheus1 config

* Wed Mar 21 2018 Mykola Marzhan <mykola.marzhan@percona.com> - 1.9.0-10
- PMM-1823 add password page compilation

* Thu Nov 16 2017 Mykola Marzhan <mykola.marzhan@percona.com> - 1.5.0-6
- PMM-1708 use node_exporter from pmm-client

* Tue Aug 22 2017 Mykola Marzhan <mykola.marzhan@percona.com> - 1.3.0-5
- add supervisord.d config

* Tue Aug 22 2017 Mykola Marzhan <mykola.marzhan@percona.com> - 1.2.2-3
- add clickhouse.xml

* Tue Mar 14 2017 Mykola Marzhan <mykola.marzhan@percona.com> - 1.1.2-3
- add my.cnf

* Mon Feb 13 2017 Mykola Marzhan <mykola.marzhan@percona.com> - 1.1.0-2
- add version to landing page

* Thu Feb  9 2017 Mykola Marzhan <mykola.marzhan@percona.com> - 1.1.0-1
- add build_timestamp to Release value

* Wed Dec 28 2016 Mykola Marzhan <mykola.marzhan@percona.com> - 1.0.7-7
- add /etc/tmpfiles.d/pmm.conf file
- run systemd-tmpfiles tool during post install

* Wed Dec 28 2016 Mykola Marzhan <mykola.marzhan@percona.com> - 1.0.7-2
- add sysconfig

* Mon Dec 19 2016 Mykola Marzhan <mykola.marzhan@percona.com> - 1.0.7-1
- init version
