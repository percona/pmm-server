packer {
  required_plugins {
    amazon = {
      version = "=1.0.8"
      source  = "github.com/hashicorp/amazon"
    }
  }
}

source "amazon-ebs" "pmm2" {
  ami_name      = "PMM2 Server [${formatdate("2006-01-02 1504", timestamp())}]"
  instance_type = "c4.xlarge"
  ena_support   = "true"

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

  source_ami_filter {
    filters = {
      name                = "*amzn2-ami-hvm-*"
      root-device-type    = "ebs"
      virtualization-type = "hvm"
      architecture        = "x86_64"
    }
    most_recent = true
    owners = ["amazon"]
  }
  ssh_username = "ec2-user"
  tags = {
    iit-billing-tag = "pmm-worker"
  }
  run_tags = {
    iit-billing-tag = "pmm-ami"
  }
  run_volume_tags = {
    iit-billing-tag = "pmm-ami"
  }
  launch_block_device_mappings {
    device_name = "/dev/xvda"
    volume_size = 100
    volume_type = "gp3"
    delete_on_termination = true
  }
  vpc_filter {
    filters = {
      "tag:Name" : "jenkins-pmm-amzn2"
    }
  }
  subnet_filter {
    filters = {
      "tag:Name" : "jenkins-pmm-amzn2-B"
    }
    random = true
  }

  source_ami_filter {
    filters = {
      name                = "*amzn2-ami-hvm-*"
      root-device-type    = "ebs"
      virtualization-type = "hvm"
      architecture        = "x86_64"
    }
    most_recent = true
    owners = ["amazon"]
  }

  security_group_id = "sg-688c2b1c"
  ssh_pty           = "true"
  ssh_username      = "ec2-user"
}


build {
  name    = "pmm2"
  sources = [
    "source.amazon-ebs.pmm2"
  ]
  provisioner "ansible" {
    playbook_file = "./packer/ansible/pmm2.yml"
  }
}
