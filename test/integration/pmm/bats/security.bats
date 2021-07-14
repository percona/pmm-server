#!/usr/bin/env bats

@test 'authorized_keys is empty or not exists' {
    [ ! -s '/root/.ssh/authorized_keys' ]
}

@test 'PermitRootLogin=no' {
    grep 'PermitRootLogin no' /etc/ssh/sshd_config
}
