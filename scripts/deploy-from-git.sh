#!/usr/bin/env bash
set -Eeuo pipefail

REPO_URL="https://github.com/Yangtian-H/pingqitong-web.git"
REPO_DIR="/var/www/pingqitong-repo"
FRONTEND_DIR="/var/www/html"
BACKEND_DIR="/var/www/pingqitong-backend"
BACKUP_ROOT="/var/www/backups"
PM2_NAME="pingqitong-backend"
HEALTH_URL="http://127.0.0.1:3000/api/health"
STAMP="$(date +%Y%m%d-%H%M%S)"
BACKUP_DIR="${BACKUP_ROOT}/${STAMP}"

step() {
  printf "\n[%s] %s\n" "$1" "$2"
}

need_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "缺少命令：$1"
    exit 1
  fi
}

ensure_safe_path() {
  case "$1" in
    /var/www/html|/var/www/pingqitong-backend|/var/www/pingqitong-repo|/var/www/backups|/var/www/backups/*) ;;
    *)
      echo "拒绝操作非预期目录：$1"
      exit 1
      ;;
  esac
}

need_command git
need_command rsync
need_command npm
need_command node
need_command pm2
need_command nginx
need_command systemctl
need_command curl

ensure_safe_path "$REPO_DIR"
ensure_safe_path "$FRONTEND_DIR"
ensure_safe_path "$BACKEND_DIR"
ensure_safe_path "$BACKUP_ROOT"
ensure_safe_path "$BACKUP_DIR"

step "1/8" "拉取代码"
if [ ! -d "$REPO_DIR/.git" ]; then
  mkdir -p "$(dirname "$REPO_DIR")"
  git clone "$REPO_URL" "$REPO_DIR"
else
  cd "$REPO_DIR"
  git fetch origin
  git checkout main
  git pull --ff-only origin main
fi

cd "$REPO_DIR"
if [ ! -d "frontend" ] || [ ! -f "backend/server.js" ] || [ ! -f "backend/package.json" ]; then
  echo "仓库结构异常，必须包含 frontend/ 和 backend/server.js。"
  exit 1
fi

step "2/8" "备份线上文件"
mkdir -p "$BACKUP_DIR/html" "$BACKUP_DIR/backend"
if [ -d "$FRONTEND_DIR" ]; then
  rsync -a "$FRONTEND_DIR/" "$BACKUP_DIR/html/"
fi
if [ -f "$BACKEND_DIR/server.js" ]; then
  cp -a "$BACKEND_DIR/server.js" "$BACKUP_DIR/backend/server.js"
fi
if [ -f "$BACKEND_DIR/package.json" ]; then
  cp -a "$BACKEND_DIR/package.json" "$BACKUP_DIR/backend/package.json"
fi
if [ -f "$BACKEND_DIR/package-lock.json" ]; then
  cp -a "$BACKEND_DIR/package-lock.json" "$BACKUP_DIR/backend/package-lock.json"
fi
echo "备份目录：$BACKUP_DIR"

step "3/8" "同步前端"
if [ "$FRONTEND_DIR" != "/var/www/html" ]; then
  echo "前端目录异常，拒绝执行 rsync --delete。"
  exit 1
fi
mkdir -p "$FRONTEND_DIR"
rsync -a --delete "$REPO_DIR/frontend/" "$FRONTEND_DIR/"

step "4/8" "同步后端"
mkdir -p "$BACKEND_DIR"
install -m 0644 "$REPO_DIR/backend/server.js" "$BACKEND_DIR/server.js"
install -m 0644 "$REPO_DIR/backend/package.json" "$BACKEND_DIR/package.json"
if [ -f "$REPO_DIR/backend/package-lock.json" ]; then
  install -m 0644 "$REPO_DIR/backend/package-lock.json" "$BACKEND_DIR/package-lock.json"
fi
mkdir -p "$BACKEND_DIR/data"
echo "已保留 $BACKEND_DIR/data 和 $BACKEND_DIR/node_modules，不执行删除。"

step "5/8" "安装依赖"
cd "$BACKEND_DIR"
npm install --omit=dev

step "6/8" "检查语法"
node -c server.js

step "7/8" "重启服务"
if pm2 describe "$PM2_NAME" >/dev/null 2>&1; then
  pm2 restart "$PM2_NAME"
else
  pm2 start server.js --name "$PM2_NAME"
fi
pm2 save
nginx -t
systemctl reload nginx

step "8/8" "健康检查"
curl -fsS "$HEALTH_URL"
printf "\n部署完成。\n"
