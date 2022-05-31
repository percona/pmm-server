%global repo            pmm-server
%global provider        github.com/percona/%{repo}
%global commit          0dbbc0ca255591000f0371012cd4e7515624a059
%global shortcommit     %(c=%{commit}; echo ${c:0:7})
%define build_timestamp %(date -u +"%y%m%d%H%M")
%global pmm_repo        pmm
%global pmm_provider    github.com/percona/%{pmm_repo}
%global pmm_commit      @@pmm_commit@@
%global pmm_shortcommit %(c=%{pmm_commit}; echo ${c:0:7})
%define release         26
%define rpm_release     %{release}.%{build_timestamp}.%{shortcommit}%{?dist}

Name:       %{repo}
Version:    %{version}
Release:    %{rpm_release}
Summary:    Percona Monitoring and Management Server

License:    AGPLv3
URL:        https://%{provider}
Source0:    https://%{provider}/archive/%{commit}/%{repo}-%{shortcommit}.tar.gz
Source1:    https://%{pmm_provider}/archive/%{pmm_commit}/%{pmm_repo}-%{pmm_shortcommit}.tar.gz

BuildArch:	noarch
BuildRequires:	openssl

%description
Percona Monitoring and Management (PMM) Server.
See the PMM docs for more information.

%package    systemd
Version:    %{version}
Release:    %{rpm_release}
Summary:    SystemD service for Percona Monitoring and Management Server

License:    AGPLv3
URL:        https://%{provider}

BuildArch:  noarch
Requires:   podman systemd shadow-utils
BuildRequires:  systemd-rpm-macros

%description systemd
SystemD service to run Percona Monitoring and Management (PMM) Server.
It runs podman to manage PMM.
See the PMM docs for more information.

%prep
%setup -q -n %{repo}-%{commit}


%build
make build-installation-wizard

%install
tar -zxvf %SOURCE1
install -d %{buildroot}%{_sysconfdir}/nginx/conf.d
install -d %{buildroot}%{_datadir}/percona-dashboards

mv alertmanager.yml %{buildroot}%{_sysconfdir}/alertmanager.yml

install -d %{buildroot}%{_sysconfdir}/supervisord.d
mv supervisord.conf %{buildroot}%{_sysconfdir}/supervisord.d/pmm.ini

install -d %{buildroot}%{_datadir}/%{name}
cp -pav ./entrypoint.sh %{buildroot}%{_datadir}/%{name}/entrypoint.sh
cp -pav ./installation-wizard/build %{buildroot}%{_datadir}/%{name}/installation-wizard-page
cp -pav ./%{pmm_repo}-%{pmm_commit}/api/swagger %{buildroot}%{_datadir}/%{name}/swagger
rm -rf %{pmm_repo}-%{pmm_commit}

# pmm-server-systemd package
install -D -m 0644 pmm-server.service %{buildroot}/%{_unitdir}/pmm-server.service
install -D -p -m 0644 pmm-server.env %{buildroot}/%{_sysconfdir}/%{repo}/pmm-server.env

%pre systemd

# use newusers util to create user and group to assign subuid/subguid
# newusers pw_name:pw_passwd:pw_uid:pw_gid:pw_gecos:pw_dir:pw_shel
getent passwd pmm-server >/dev/null >/dev/null || echo "pmm-server:::pmm::/home/pmm-server:/bin/false" | %{_sbindir}/newusers
%{_bindir}/loginctl enable-linger pmm-server

%post systemd
%systemd_post pmm-server.service
%{_bindir}/systemctl enable pmm-server >/dev/null 2>&1 || true

%preun systemd
%systemd_preun pmm-server.service

%postun systemd
%systemd_postun_with_restart pmm-server.service
if [ $1 == 0 ]; then
  # This is a yum remove.
  %{_bindir}/loginctl terminate-user pmm-server || true
  getent passwd pmm-server >/dev/null && %{_sbindir}/userdel pmm-server
  getent group pmm >/dev/null && %{_sbindir}/groupdel pmm
fi

%files
%license LICENSE
%doc README.md CHANGELOG.md
%{_sysconfdir}/supervisord.d
%{_sysconfdir}/alertmanager.yml
%{_datadir}/%{name}

%files systemd
%license LICENSE
%doc README.md CHANGELOG.md
%{_sysconfdir}/%{repo}
%config(noreplace) %{_sysconfdir}/%{repo}/pmm-server.env
%{_unitdir}/pmm-server.service

%changelog

* Tue May 31 2022 Denys Kondratenko <denys.kondratenko@percona.com> - 2.29.0-2
- PMM-7925 add systemd service with podman support

* Mon May 16 2022 Nikita Beletskii <nikita.beletskii@percona.com> - 2.29.0-1
- PMM-10027 remove useless packages

* Wed Nov 17 2021 Nikita Beletskii <nikita.beletskii@percona.com> - 2.25.0-1
- PMM-4486 remove import-dashboards.py and use internal Grafana provisioning

* Wed Jun 30 2021 Nikita Beletskii <nikita.beletskii@percona.com> - 2.20.0-2
- PMM-8307 move nginx files to ansible playbook (pmm-update repo)

* Tue Jun 29 2021 Alexander Tymchuk <alexander.tymchuk@percona.com> - 2.20.0-1
- PMM-7627 manage nginx logs with supervisord

* Thu Jun 24 2021 Nikita Beletskii <nikita.beletskii@percona.com> - 2.19.1-1
- PMM-8266 remove prometheus config

* Tue Mar  9 2021 Alexander Tymchuk <alexander.tymchuk@percona.com> - 2.15.1-22
- PMM-6017 merge pmm-server-packaging to pmm-server

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
