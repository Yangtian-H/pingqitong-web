#!/usr/bin/env bash
set +e

PM2_NAME="pingqitong-backend"
HEALTH_URL="http://127.0.0.1:3000/api/health"

section() {
  printf "\n========== %s ==========\n" "$1"
}

section "PM2 状态"
pm2 status

section "PM2 后端日志"
pm2 logs "$PM2_NAME" --lines 80 --nostream

section "后端健康接口"
curl -i "$HEALTH_URL"

section "Nginx 配置检查"
nginx -t

section "Nginx 服务状态"
systemctl status nginx --no-pager

printf "\n检查完成。请复制完整输出用于排查。\n"
