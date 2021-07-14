#!/usr/bin/env bats

@test 'Percona-Server-server is up and running' {
    mysql -uroot -e 'SELECT Host, User FROM mysql.user'
}

@test 'Check firewalld rules' {
  firewall-cmd --list-ports --permanent | grep '80/tcp'
  firewall-cmd --list-ports --permanent | grep '443/tcp'
}

