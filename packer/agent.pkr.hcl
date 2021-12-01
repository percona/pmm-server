packer {
  required_plugins {
    amazon = {
      version = "=1.0.3"
      source  = "github.com/hashicorp/amazon"
    }
  }
}

source "amazon-ebs" "agent" {
  ami_name      = "Docker Agent"
  instance_type = "t3.xlarge"
  force_deregister = true
  force_delete_snapshot = true
  region        = "us-east-2"
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
    iit-billing-tag = "pmm-worker"
  }
  run_volume_tags = {
    iit-billing-tag = "pmm-worker"
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

}

build {
  name    = "jenkins-farm"
  sources = [
    "source.amazon-ebs.agent"
  ]
  provisioner "ansible" {
    playbook_file = "./packer/ansible/agent.yml"
  }
}
