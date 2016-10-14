#!/bin/bash

set -eu

VER="$(cat VERSION)"
REV="$(git log -n 1 --no-walk --pretty="%h")"
DATE="$(TZ="UTC" date "+%Y%m%d")"

docker tag percona/pmm-server percona/pmm-server:"$VER-dev$DATE.$REV"
docker push percona/pmm-server:"$VER-dev$DATE.$REV"
