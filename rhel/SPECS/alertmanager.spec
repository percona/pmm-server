%define debug_package %{nil}

%global provider        github
%global provider_tld    com
%global project         prometheus
%global repo            alertmanager
%global provider_prefix %{provider}.%{provider_tld}/%{project}/%{repo}
%global import_path     %{provider_prefix}
%global commit          f74be0400a6243d10bb53812d6fa408ad71ff32d
%global shortcommit     %(c=%{commit}; echo ${c:0:7})

%global install_golang 0

Name:           percona-%{repo}
Version:        0.20.0
Release:        3%{?dist}
Summary:        The Prometheus monitoring system and time series database
License:        ASL 2.0
URL:            https://%{provider_prefix}
Source0:        https://%{provider_prefix}/archive/%{commit}/%{repo}-%{shortcommit}.tar.gz

%if %{install_golang}
BuildRequires:   golang >= 1.12.0
%endif

%description
%{summary}

%description
%{summary}


%prep
%setup -q -n %{repo}-%{commit}
mkdir -p ./build/src/github.com/prometheus
ln -s $(pwd) ./build/src/github.com/prometheus/alertmanager


%build
export GOPATH="$(pwd)/build"
export CGO_ENABLED=0
export USER=builder

cd build/src/github.com/prometheus/alertmanager
make build


%install
install -D -p -m 0755 ./%{repo}  %{buildroot}%{_sbindir}/%{repo}
install -D -p -m 0755 ./amtool %{buildroot}%{_bindir}/amtool
install -d %{buildroot}%{_datadir}/%{repo}
install -d %{buildroot}%{_sharedstatedir}/%{repo}


%files
%doc LICENSE CHANGELOG.md README.md NOTICE
%{_sbindir}/%{repo}
%{_bindir}/amtool
%{_datadir}/%{repo}
%dir %attr(-, nobody, nobody) %{_sharedstatedir}/%{repo}

%changelog
* Thu Jul  2 2020 Mykyta Solomko <mykyta.solomko@percona.com> - 0.20.0-3
- PMM-5645 built using Golang 1.14

* Fri Mar 27 2020 Mykyta Solomko <mykyta.solomko@percona.com> - 0.20.0
- Init version
