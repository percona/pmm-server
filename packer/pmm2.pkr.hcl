packer {
  required_plugins {
    amazon = {
      version = "=1.0.8"
      source  = "github.com/hashicorp/amazon"
    }
  }
}

variable "pmm_server_image_name" {
  type = string
  default = "perconalab/pmm-server:dev-latest"
}

source "amazon-ebs" "pmm2" {
  ami_name          = "PMM2 Server [${formatdate("YYYY-MM-DD hhmm", timestamp())}]"
  instance_type     = "c4.xlarge"
  ena_support       = "true"
  region            = "us-east-1"
  subnet_id         = "subnet-ee06e8e1"
  security_group_id = "sg-688c2b1c"
  ssh_username      = "ec2-user"

  launch_block_device_mappings {
    delete_on_termination = true
    device_name           = "/dev/xvda"
    volume_size           = 8
    volume_type           = "gp3"
  }

  launch_block_device_mappings {
    delete_on_termination = false
    device_name           = "/dev/xvdb"
    volume_size           = 100
    volume_type           = "gp3"
  }

  source_ami_filter {
    filters = {
      name                = "*amzn2-ami-hvm-*"
      root-device-type    = "ebs"
      virtualization-type = "hvm"
      architecture        = "x86_64"
    }
    most_recent = true
    owners      = ["amazon"]
  }
  tags = {
    iit-billing-tag = "pmm-worker"
  }
  run_tags = {
    iit-billing-tag = "pmm-ami"
  }
  run_volume_tags = {
    iit-billing-tag = "pmm-ami"
  }
}


build {
  name = "pmm2"
  sources = [
    "source.amazon-ebs.pmm2"
  ]
  provisioner "ansible" {
    extra_arguments = [
        "--extra-vars",
        "pmm_server_image_name=${var.pmm_server_image_name}"
    ]
    playbook_file = "./packer/ansible/pmm2.yml"
  }
}
