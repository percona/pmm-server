export PACKER_CACHE_DIR := .cache
export PACKER_VERSION := 1.7.7
export CENTOS_ISO := 2004.01

build-installation-wizard:
	cd installation-wizard && npm ci && npm run build

clean:
	rm -rf .kitchen/ Gemfile.lock ansible/{Ansiblefile.lock,tmp} *.ova *-virtualbox-ovf
	find . -name "*~" -delete

clean-all: clean
	rm -rf ${PACKER_CACHE_DIR}

fetch:
	mkdir -p ${PACKER_CACHE_DIR}/${CENTOS_ISO} || :
	test -f ${PACKER_CACHE_DIR}/id_rsa_vagrant \
	    || curl -L https://raw.githubusercontent.com/mitchellh/vagrant/master/keys/vagrant \
		-o ${PACKER_CACHE_DIR}/id_rsa_vagrant
	chmod 600 ${PACKER_CACHE_DIR}/id_rsa_vagrant
	test -f ${PACKER_CACHE_DIR}/${CENTOS_ISO}/CentOS7.ova \
		|| wget --progress=dot:giga https://app.vagrantup.com/centos/boxes/7/versions/${CENTOS_ISO}/providers/virtualbox.box \
		-O ${PACKER_CACHE_DIR}/${CENTOS_ISO}/CentOS7.ova
	test -f ${PACKER_CACHE_DIR}/${CENTOS_ISO}/box.ovf \
		|| tar -C ${PACKER_CACHE_DIR}/${CENTOS_ISO} -xf ${PACKER_CACHE_DIR}/${CENTOS_ISO}/CentOS7.ova

deps:
	mkdir -p ${PACKER_CACHE_DIR} ~/bin || :
	curl https://releases.hashicorp.com/packer/${PACKER_VERSION}/packer_${PACKER_VERSION}_linux_amd64.zip -o ${PACKER_CACHE_DIR}/packer.zip
	unzip -o ${PACKER_CACHE_DIR}/packer.zip -d ~/bin

pmm-ovf: fetch
	packer build -only virtualbox-ovf packer/pmm.json

pmm-ami:
	packer build -only amazon-ebs packer/pmm.json

pmm-gcp:
	packer build -only googlecompute packer/pmm.json

pmm-az:
	az storage container delete --account-name percona --name images
	packer build -only azure-arm packer/pmm.json

pmm2-ovf: fetch
	packer build -only virtualbox-ovf.ovf_distribuion packer/pmm2.pkr.hcl

pmm2-digitalocean:
	packer build -only digitalocean.digitalocean_distribuion -var 'single_disk=true' packer/pmm2.pkr.hcl

pmm2-azure:
	packer build -only azure-arm.azure_distribuion packer/pmm2.pkr.hcl

pmm2-ami:
	docker run --rm -v ${HOME}/.aws:/root/.aws -v `pwd`:/build -w /build hashicorp/packer:${PACKER_VERSION} \
			build -var 'pmm_client_repos=original experimental' \
                  -var 'pmm_client_repo_name=percona-experimental-x86_64' \
                  -var 'pmm2_server_repo=experimental' \
                  -only amazon-ebs.aws_distribuion -color=false \
				  packer/pmm2.pkr.hcl
pmm2-ami-rc:
	docker run --rm -v ${HOME}/.aws:/root/.aws -v `pwd`:/build -w /build hashicorp/packer:${PACKER_VERSION} \
			build -only amazon-ebs.aws_distribuion '-color=false' \
				  packer/pmm2.pkr.hcl
