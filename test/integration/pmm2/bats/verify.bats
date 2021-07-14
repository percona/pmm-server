#!/usr/bin/env bats

@test 'Check firewalld rules' {
  firewall-cmd --list-ports --permanent | grep '80/tcp'
  firewall-cmd --list-ports --permanent | grep '443/tcp'
}

