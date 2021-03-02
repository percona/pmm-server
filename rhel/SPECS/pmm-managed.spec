%undefine _missing_build_ids_terminate_build
%global _dwz_low_mem_die_limit 0

# do not strip debug symbols
%global debug_package   %{nil}

%global provider	github
%global provider_tld	com
%global project		percona
%global repo		pmm-managed
%global provider_prefix	%{provider}.%{provider_tld}/%{project}/%{repo}
%global import_path	%{provider_prefix}
%global commit		8f3d007617941033867aea6a134c48b39142427f
%global shortcommit	%(c=%{commit}; echo ${c:0:7})
%define build_timestamp %(date -u +"%y%m%d%H%M")
%define release         17
%define rpm_release     %{release}.%{build_timestamp}.%{shortcommit}%{?dist}

# the line below is sed'ed by build/bin/build-server-rpm to set a correct version
%define full_pmm_version 2.0.0

%global install_golang 0

Name:		%{repo}
Version:	%{version}
Release:	%{rpm_release}
Summary:	Percona Monitoring and Management management daemon

License:	AGPLv3
URL:		https://%{provider_prefix}
Source0:	https://%{provider_prefix}/archive/%{commit}/%{repo}-%{shortcommit}.tar.gz

%if %{install_golang}
BuildRequires:   golang >= 1.12.0
%endif

%description
pmm-managed manages configuration of PMM server components (Prometheus,
Grafana, etc.) and exposes API for that.  Those APIs are used by pmm-admin tool.
See the PMM docs for more information.


%prep
%setup -q -n %{repo}-%{commit}
mkdir -p src/%{provider}.%{provider_tld}/%{project}
ln -s $(pwd) src/%{provider_prefix}


%build
export GOPATH=$(pwd)/

export PMM_RELEASE_VERSION=%{full_pmm_version}
export PMM_RELEASE_FULLCOMMIT=%{commit}
export PMM_RELEASE_BRANCH=""

cd src/github.com/percona/pmm-managed
make release


%install
install -d -p %{buildroot}%{_bindir}
install -d -p %{buildroot}%{_sbindir}
install -p -m 0755 bin/pmm-managed %{buildroot}%{_sbindir}/pmm-managed
install -p -m 0755 bin/pmm-managed-init %{buildroot}%{_sbindir}/pmm-managed-init
install -p -m 0755 bin/pmm-managed-starlark %{buildroot}%{_sbindir}/pmm-managed-starlark


%files
%license src/%{provider_prefix}/LICENSE
%doc src/%{provider_prefix}/README.md
%{_sbindir}/pmm-managed
%{_sbindir}/pmm-managed-init
%{_sbindir}/pmm-managed-starlark


%changelog
* Thu Jul  2 2020 Mykyta Solomko <mykyta.solomko@percona.com> - 2.0.0-17
- PMM-5645 built using Golang 1.14

* Tue May 12 2020 Alexey Palazhchenko <alexey.palazhchenko@percona.com> - 2.0.0-16
- added pmm-managed-starlark

* Tue Feb 11 2020 Mykyta Solomko <mykyta.solomko@percona.com> - 2.0.0-14
- added pmm-managed-init

* Thu Sep  5 2019 Viacheslav Sarzhan <slava.sarzhan@percona.com> - 2.0.0-10
- init version
