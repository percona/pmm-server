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
  subnet_id    = "subnet-00b3df129e7d8c658"
  tags = {
    iit-billing-tag = "pmm-slave"
  }
  run_tags = {
    iit-billing-tag = "pmm-slave"
  }
  run_volume_tags = {
    iit-billing-tag = "pmm-slave"
  }

}

build {
  name    = "jenkins-farm"
  sources = [
    "source.amazon-ebs.agent"
  ]
  provisioner "shell" {
    inline = [
        "sudo yum install -y docker java-1.8.0-openjdk.x86_64 git ",
        "sudo systemctl enable docker.service",
        "sudo systemctl start docker.service",
        "sudo usermod -a -G docker ec2-user"
    ]
  }
}
