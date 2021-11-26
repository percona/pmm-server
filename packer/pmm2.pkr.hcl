
variable "pmm2_server_repo" {
  type    = string
  default = "testing"
}

variable "pmm_client_repo_name" {
  type    = string
  default = "percona-testing-x86_64"
}

variable "pmm_client_repos" {
  type    = string
  default = "original testing"
}

variable "single_disk" {
  type    = string
  default = "false"
}

source "amazon-ebs" "aws_distribution" {
  ami_name      = "PMM2 Server [${formatdate("2006-01-02 1504", timestamp())}]"
  ena_support   = "true"
  instance_type = "c4.xlarge"
  launch_block_device_mappings {
    delete_on_termination = true
    device_name           = "/dev/sda1"
    volume_size           = 8
    volume_type           = "gp3"
  }
  launch_block_device_mappings {
    delete_on_termination = false
    device_name           = "/dev/sdb"
    volume_size           = 100
    volume_type           = "gp3"
  }
  region = "us-east-1"
  run_tags = {
    iit-billing-tag = "pmm-ami"
  }
  run_volume_tags = {
    iit-billing-tag = "pmm-ami"
  }
  security_group_id = "sg-688c2b1c"
  source_ami        = "ami-00e87074e52e6c9f9"
  ssh_pty           = "true"
  ssh_username      = "centos"
  subnet_id         = "subnet-ee06e8e1"
}

source "azure-arm" "azure_distribution" {
  azure_tags = {
    dept = "Engineering"
    task = "PMM2 Image deployment"
  }
  capture_container_name = "percona"
  capture_name_prefix    = "pmm2-server-${var.pmm_version}"
  disk_additional_size   = [30]
  image_offer            = "CentOS"
  image_publisher        = "OpenLogic"
  image_sku              = "7_9"
  image_version          = "7.9.2021071900"
  location               = "East US"
  os_type                = "Linux"
  resource_group_name    = "percona"
  storage_account        = "percona"
  subscription_id        = "41000701-4126-4674-9219-da03b1f9bb58"
  vm_size                = "Standard_B2s"
}

source "digitalocean" "digitalocean_distribution" {
  image                     = "centos-7-x64"
  region                    = "nyc3"
  size                      = "s-2vcpu-2gb"
  snapshot_name             = "PMM2 Server [${formatdate("2006-01-02 1504", timestamp())}]"
  ssh_clear_authorized_keys = "true"
  ssh_username              = "root"
}

source "virtualbox-ovf" "ovf_distribution" {
  export_opts          = [
    "--ovf10",
    "--manifest",
    "--vsys", "0",
    "--product", "Percona Monitoring and Management",
    "--producturl", "https://www.percona.com/software/database-tools/percona-monitoring-and-management",
    "--vendor", "Percona",
    "--vendorurl", "https://www.percona.com",
    "--version", "${formatdate("2006-01-02 1504", timestamp())}",
    "--description", "Percona Monitoring and Management (PMM) is an open-source platform for managing and monitoring MySQL and MongoDB performance"]
  format               = "ovf"
  guest_additions_mode = "disable"
  headless             = true
  output_directory     = "pmm2-virtualbox-ovf"
  shutdown_command     = "rm -rf ~/.ssh/authorized_keys; cat /dev/zero > zero.fill; sync; sleep 1; sync; rm -f zero.fill; sudo shutdown -P now"
  source_path          = ".cache/2004.01/box.ovf"
  ssh_private_key_file = ".cache/id_rsa_vagrant"
  ssh_pty              = true
  ssh_username         = "vagrant"
  vboxmanage           = [["modifyvm", "{{ .Name }}", "--memory", "4096"],
                          ["modifyvm", "{{ .Name }}", "--audio", "none"],
                          ["createhd", "--format", "VMDK", "--filename", "/tmp/{{ .Name }}-disk2.vmdk", "--variant", "STREAM", "--size", "409600"], ["storagectl", "{{ .Name }}", "--name", "SCSI Controller", "--add", "scsi", "--controller", "LSILogic"], ["storageattach", "{{ .Name }}", "--storagectl", "SCSI Controller", "--port", "1", "--type", "hdd", "--medium", "/tmp/{{ .Name }}-disk2.vmdk"]]
  vm_name              = "PMM2-Server-${formatdate("2006-01-02 1504", timestamp())}"
}

build {
  sources = [
    "source.amazon-ebs.aws_distribution",
    "source.azure-arm.azure_distribution",
    "source.digitalocean.digitalocean_distribution",
    "source.virtualbox-ovf.ovf_distribution"
  ]

  provisioner "shell" {
    inline = [
      "sudo yum -y update",
      "sudo yum -y install epel-release",
      "sudo yum -y install ansible bats"
      ]
  }

  provisioner "ansible-local" {
    extra_arguments = ["-v", "--extra-vars", "\"pmm2_server_repo='${var.pmm2_server_repo}' pmm_client_repo_name='${var.pmm_client_repo_name}' pmm_client_repos='${var.pmm_client_repos}'\""]
    playbook_file   = "ansible/pmm2/main.yml"
    role_paths      = [
      "ansible/roles/cloud-node",
      "ansible/roles/postgres-init",
      "ansible/roles/lvm-init",
      "ansible/roles/pmm2-images",
      "ansible/roles/supervisord-init",
      "ansible/roles/ami-ovf"
    ]
  }

  provisioner "shell" {
    inline = ["sudo ansible-playbook -vvv -i 'localhost,' -c local /usr/share/pmm-update/ansible/playbook/tasks/update.yml"]
  }

  provisioner "ansible-local" {
    extra_arguments = ["-v"]
    playbook_file   = "ansible/pmm2/post-build-actions.yml"
  }

  provisioner "file" {
    destination = "/tmp"
    source      = "test/integration/pmm2/bats"
  }

  provisioner "shell" {
    inline = ["sudo bats /tmp/bats/*.bats"]
  }

  provisioner "file" {
    destination = "/home/admin/digitalocean_add_dbaas"
    only        = ["digitalocean"]
    source      = "files/digitalocean/digitalocean_add_dbaas.py"
  }

  provisioner "shell" {
    inline = ["curl -s https://raw.githubusercontent.com/digitalocean/marketplace-partners/master/scripts/99-img-check.sh -o img_check.sh", "sudo bash ./img_check.sh"]
    only   = ["digitalocean"]
  }

  post-processor "shell-local" {
    inline         = [
      "set -o errexit",
      "set -o xtrace",
      "pushd pmm2-virtualbox-ovf",
      "    NAME=$(ls *.ovf | sed -e 's/.ovf//')",
      "    sed -i'' -e 's/virtualbox-2.2/vmx-10/'        *.ovf",
      "    sed -i'' -e 's/ovf:id=\"80\"/ovf:id=\"102\"/' *.ovf",
      "    sed -i'' -e 's/>RedHat_64</>otherGuest</'     *.ovf",
      "    sed -i'' -e 'N;/StorageController name=\"SCSI/,1d' *.ovf",
      "    sed -i'' -e 's/name=\"IDE\" type=\"PIIX4\"/name=\"SCSI Controller\" type=\"LsiLogic\"/' *.ovf",
      "    sed -i'' -e 's/>ideController/>SCSIController/'     *.ovf",
      "    sed -i'' -e 's/>IDE Controller</>SCSI Controller</'     *.ovf",
      "    sed -i'' -e 's/>PIIX4</>lsilogic</'     *.ovf",
      "    sed -i'' -e 's/ResourceType>5</ResourceType>6</'     *.ovf",
      "    sed -i'' -e 's/PortCount=\"2\"/PortCount=\"16\"/'     *.ovf",
      "    xmlstarlet ed -N xmlns='http://schemas.dmtf.org/ovf/envelope/1' -d '/xmlns:Envelope/xmlns:VirtualSystem/xmlns:VirtualHardwareSection/xmlns:Item[rasd:InstanceID=5]' $${NAME}.ovf | tee tmp.ovf",
      "    xmlstarlet ed -N xmlns='http://schemas.dmtf.org/ovf/envelope/1' -d '/xmlns:Envelope/xmlns:VirtualSystem/xmlns:VirtualHardwareSection/xmlns:Item[rasd:InstanceID=4]' tmp.ovf | tee $${NAME}.ovf",
      "    rm -rf tmp.ovf", "    sed -i'' -e 's/Parent>5</Parent>3</'     *.ovf",
      "    sha1sum *.ovf *.vmdk \\", "        | sed -E 's/^([^ ]+)  ([^ ]+)$/SHA1(\\2)= \\1/' \\",
      "        > $${NAME}.mf", "    tar -cpf $${NAME}.ova *.ovf *.mf *-disk001.vmdk *-disk002.vmdk",
      "    rm -rf               *.ovf *.mf *-disk001.vmdk *-disk002.vmdk", "popd"
    ]
    inline_shebang = "/bin/bash"
    only           = ["virtualbox-ovf"]
  }
  post-processor "manifest" {
    only       = ["amazon-ebs"]
    output     = "manifest.json"
    strip_path = true
  }
}
