#!/bin/sh

service grafana-server start

for i in `seq 30`; do
	if curl -s http://admin:admin@localhost:3000/api/datasources; then
		curl http://admin:admin@localhost:3000/api/datasources -X POST -H 'Content-Type: application/json' --data-binary '{"name":"Prometheus","type":"prometheus","url":"http://localhost:9090/prometheus/","access":"proxy","isDefault":true}'
		echo "Added Prometheus data source to Grafana"
		break
	else
		echo "Waiting for Grafana..."
		sleep 1
	fi
done

# Apply interval fix
sed -i 's/expr=\(.\)\.replace(\(.\)\.expr,\(.\)\.scopedVars\(.*\)var \(.\)=\(.\)\.interval/expr=\1.replace(\2.expr,\3.scopedVars\4var \5=\1.replace(\6.interval, \3.scopedVars)/' /usr/share/grafana/public/app/plugins/datasource/prometheus/datasource.js
sed -i 's/,range_input/.replace(\/"{\/g,"\\"").replace(\/}"\/g,"\\""),range_input/; s/step_input:""/step_input:this.target.step/' /usr/share/grafana/public/app/plugins/datasource/prometheus/query_ctrl.js
