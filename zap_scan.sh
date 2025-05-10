#!/bin/bash

# CONFIG
TARGET_URL="http://localhost:8080"     # ZAP will target the ingress load-balanced endpoint ...
REPORT_NAME="zap_report.html"
ZAP_CONTAINER_NAME="zap-scan"
ZAP_IMAGE="owasp/zap2docker-stable"
ZAP_SCRIPT="zap-full-scan.py"

# Ensure report folder exists
mkdir -p reports

echo "[+] Starting OWASP ZAP scan on $TARGET_URL..."

docker run --rm \
  --name $ZAP_CONTAINER_NAME \
  --network host \
  -v "$(pwd)/reports:/zap/wrk/:rw" \
  -t $ZAP_IMAGE $ZAP_SCRIPT \
  -t "$TARGET_URL" \
  -r "$REPORT_NAME" \
  -I -j

echo "[+] Scan complete. Report: ./reports/$REPORT_NAME"
