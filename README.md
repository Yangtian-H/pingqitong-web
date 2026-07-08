# 乒器通

乒器通是一个面向乒乓球爱好者的器材选型和社区原型项目。当前包含静态前端页面和 Node.js + Express 后端，已经接入注册登录、JWT、个人资料、后台保存配置、管理员用户列表、禁用/启用用户、角色切换等能力。

## 本地目录结构

```text
frontend/                 前端静态页面、资源、截图和前端工具
backend/                  Node.js Express 后端
scripts/                  服务器部署和检查脚本
README.md                 项目说明
CODEX.md                  Codex 后续修改规则
.gitignore                Git 忽略规则
```

根目录中的 data/、outputs/、tmpascii/、deploy-static/、.npm-cache/ 等本地资料或缓存默认不提交 GitHub。

## 本地前端调试

前端是静态页面，可以直接打开 frontend/index.html。为了模拟线上 /api 相对路径，建议使用本地静态服务，并确保后端运行在 127.0.0.1:3000：

```bash
cd frontend
npx serve . -l 8080
```

如果只检查页面布局，也可以直接用浏览器打开 frontend/index.html。

## 本地后端调试

环境依赖：

- Node.js 18 或更高版本
- npm

安装后端依赖：

```bash
cd backend
npm install
```

启动后端：

```bash
cd backend
npm start
```

语法检查：

```bash
cd backend
npm run check
```

测试健康接口：

```bash
curl http://127.0.0.1:3000/api/health
```

## API 测试重点

- GET /api/health 应返回 ok: true。
- GET /api/auth/check-username?username=testuser 应返回账号可用状态。
- POST /api/auth/register 应校验账号唯一、密码 8-15 位、密码包含字母和数字。
- POST /api/auth/login 应拒绝被 disabled 的用户。
- GET /api/auth/me 必须携带 JWT。
- GET /api/configs 只能返回当前登录用户自己的配置。
- GET /api/admin/users 只有 role === admin 的用户可以访问。

## GitHub 首次上传

仓库地址：

```text
https://github.com/Yangtian-H/pingqitong-web.git
```

本机需要先安装 Git，并使用浏览器授权或 GitHub CLI 登录，不要把 GitHub 密码写进命令。

```bash
git init
git branch -M main
git remote add origin https://github.com/Yangtian-H/pingqitong-web.git
git status
git add .
git status
git commit -m "initial pingqitong project"
git push -u origin main
```

如果 origin 已经存在：

```bash
git remote -v
git remote set-url origin https://github.com/Yangtian-H/pingqitong-web.git
```

如果 push 提示远程仓库已有内容或出现冲突，不要 force push。先执行：

```bash
git fetch origin
git log --oneline --decorate --all --max-count=20
```

确认远程内容后，再选择合并远程 main、迁移本地代码到新分支，或清空远程仓库后重新上传。

## 不能提交的文件

- backend/data/
- data/
- node_modules/
- .env 或任何密钥文件
- 日志文件
- 备份文件
- 服务器密码、GitHub token、SSH 私钥、阿里云账号信息
- 打包文件，例如 .zip、.tar.gz

提交前建议检查：

```bash
git status
git diff --cached --name-only
```

## 服务器首次 clone

不要在本地直接连接服务器或执行部署。下面步骤需要你登录服务器后手动执行。

```bash
sudo mkdir -p /var/www
sudo git clone https://github.com/Yangtian-H/pingqitong-web.git /var/www/pingqitong-repo
cd /var/www/pingqitong-repo
sudo bash scripts/deploy-from-git.sh
```

如果 PM2 进程还没有创建，部署脚本会在语法检查通过后使用同名进程启动一次。需要手动排查时，可在后端目录单独执行：

```bash
cd /var/www/pingqitong-backend
pm2 start server.js --name pingqitong-backend
pm2 save
```

Nginx 需要保证 /api/ 反向代理到 http://127.0.0.1:3000/api/，前端部署目录是 /var/www/html。

## 服务器更新部署

日常更新流程：

1. 本地修改并测试。
2. 确认没有提交 data、node_modules、.env、密钥或备份文件。
3. git commit。
4. git push origin main。
5. 登录服务器。
6. 执行：

```bash
cd /var/www/pingqitong-repo
sudo bash scripts/deploy-from-git.sh
```

部署脚本会先拉取 GitHub 最新代码，备份线上前端和后端关键文件，同步 frontend/ 到 /var/www/html，只同步 backend/server.js、backend/package.json、backend/package-lock.json 到后端目录，不覆盖 /var/www/pingqitong-backend/data。

## 回滚流程

每次部署会生成备份目录：

```text
/var/www/backups/日期时间
```

如果新版本部署失败，登录服务器后选择最近一次可用备份，执行类似命令：

```bash
BACKUP_DIR=/var/www/backups/20260708-120000

sudo rsync -a --delete "$BACKUP_DIR/html/" /var/www/html/
sudo cp -a "$BACKUP_DIR/backend/server.js" /var/www/pingqitong-backend/server.js
sudo cp -a "$BACKUP_DIR/backend/package.json" /var/www/pingqitong-backend/package.json
sudo cp -a "$BACKUP_DIR/backend/package-lock.json" /var/www/pingqitong-backend/package-lock.json

cd /var/www/pingqitong-backend
npm install --omit=dev
node -c server.js
pm2 restart pingqitong-backend
nginx -t
systemctl reload nginx
curl http://127.0.0.1:3000/api/health
```

回滚也不能覆盖 /var/www/pingqitong-backend/data。

## 常见故障排查

502：

- 确认 PM2 进程是否运行：pm2 status。
- 检查后端日志：pm2 logs pingqitong-backend --lines 80 --nostream。
- 检查本地健康接口：curl -i http://127.0.0.1:3000/api/health。
- 检查 Nginx 配置：nginx -t。

PM2 errored：

- 在 /var/www/pingqitong-backend 执行 node -c server.js。
- 执行 npm install --omit=dev。
- 查看日志里是否缺少依赖、端口被占用或 JWT_SECRET/data 权限异常。

Nginx 配置错误：

- 执行 nginx -t 查看具体行号。
- 确认 /api/ 代理目标是 http://127.0.0.1:3000/api/。
- 修改后执行 systemctl reload nginx。

线上故障信息可以执行：

```bash
cd /var/www/pingqitong-repo
sudo bash scripts/remote-check.sh
```

然后把输出复制回来分析。
