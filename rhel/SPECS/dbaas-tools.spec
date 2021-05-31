%define debug_package %{nil}

%global commit_aws          d7c0b2e9131faabb2b09dd804a35ee03822f8447
%global shortcommit_aws     %(c=%{commit_aws}; echo ${c:0:7})

%global commit_k8s          ec6eb119b81be488b030e849b9e64fda4caaf33c
%global shortcommit_k8s     %(c=%{commit_k8s}; echo ${c:0:7})
%global version_k8s         v1.16.8

%global install_golang 1

%define build_timestamp %(date -u +"%y%m%d%H%M")
%define release         4
%define rpm_release     %{release}.%{build_timestamp}%{?dist}

Name:           dbaas-tools
Version:        0.5.1
Release:        %{rpm_release}
Summary:        A set of tools for Percona DBaaS
License:        ASL 2.0
URL:            https://github.com/kubernetes-sigs/aws-iam-authenticator
# Git tag can be moved and pointed to different commit hash which may brake reproducibility of the build
# As by using an exact commit hash, we can ensure that each time source will be identical
Source0:        https://github.com/kubernetes-sigs/aws-iam-authenticator/archive/%{commit_aws}/aws-iam-authenticator-%{shortcommit_aws}.tar.gz
Source1:        https://github.com/kubernetes/kubernetes/archive/%{commit_k8s}/kubernetes-%{shortcommit_k8s}.tar.gz

%if %{install_golang}
BuildRequires:   golang >= 1.13.0
%endif
BuildRequires: which

%description
%{summary}

%description
%{summary}


%prep
%setup -T -c -n aws-iam-authenticator-%{commit_aws}
%setup -q -c -a 0 -n aws-iam-authenticator-%{commit_aws}
mkdir -p src/github.com/kubernetes-sigs/
mv aws-iam-authenticator-%{commit_aws} src/github.com/kubernetes-sigs/aws-iam-authenticator-%{commit_aws}

%setup -T -c -n kubernetes-%{commit_k8s}
%setup -q -c -a 1 -n kubernetes-%{commit_k8s}
mkdir -p src/github.com/kubernetes/
mv kubernetes-%{commit_k8s} src/github.com/kubernetes/kubernetes-%{commit_k8s}

%build
cd %{_builddir}/aws-iam-authenticator-%{commit_aws}
export GOPATH="$(pwd)"
export CGO_ENABLED=0
export USER=builder

cd src/github.com/kubernetes-sigs/aws-iam-authenticator-%{commit_aws}
sed -i '/dockers:/,+35d' .goreleaser.yaml
make build

cd %{_builddir}/kubernetes-%{commit_k8s}/
export GOPATH="$(pwd)"

cd src/github.com/kubernetes/kubernetes-%{commit_k8s}
make WHAT="cmd/kubectl"

%install
cd %{_builddir}/aws-iam-authenticator-%{commit_aws}/src/github.com/kubernetes-sigs/aws-iam-authenticator-%{commit_aws}
install -D -p -m 0755 dist/authenticator_linux_amd64/aws-iam-authenticator %{buildroot}/opt/dbaas-tools/bin/aws-iam-authenticator

cd %{_builddir}/kubernetes-%{commit_k8s}/src/github.com/kubernetes/kubernetes-%{commit_k8s}
install -D -p -m 0775 _output/local/go/bin/kubectl %{buildroot}/opt/dbaas-tools/bin/kubectl-1.16


%files
/opt/dbaas-tools/bin/aws-iam-authenticator
/opt/dbaas-tools/bin/kubectl-1.16

%changelog
* Thu Aug 27 2020 Illia Pshonkin <illia.pshonkin@percona.com> - 0.5.1-1
- Initial packaging for dbaas-tools
