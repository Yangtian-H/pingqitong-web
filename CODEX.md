# 乒器通项目规则

## 项目结构

frontend/ 是前端静态页面。
backend/ 是 Node.js Express 后端。
scripts/ 是部署脚本。

## 线上部署路径

前端部署到 /var/www/html。
后端部署到 /var/www/pingqitong-backend。
后端数据目录是 /var/www/pingqitong-backend/data，禁止覆盖。
PM2 进程名是 pingqitong-backend。
Nginx 将 /api/ 转发到 127.0.0.1:3000/api/。

## 开发规则

1. 前端接口必须使用 /api 相对路径。
2. 不允许在前端写死服务器 IP 或域名。
3. 不允许提交 .env、密钥、token、服务器密码、阿里云账号信息。
4. 不允许提交 backend/data。
5. 不允许提交 node_modules。
6. 不允许明文保存密码。
7. 后端密码必须使用 bcryptjs 哈希。
8. 管理员接口必须校验 JWT 和 role === admin。
9. 禁用用户不能登录，也不能访问需要登录的接口。
10. 部署脚本必须先备份再覆盖。
11. 部署脚本不能覆盖线上 data 目录。
12. 不要破坏现有登录、注册、管理员、个人资料、保存配置功能。
13. 修改后必须给出测试清单。
14. 遇到线上部署、删除、覆盖等危险操作，必须先说明风险，不要直接执行。

## GitHub 与部署规则

1. GitHub 仓库地址是 https://github.com/Yangtian-H/pingqitong.git。
2. 默认分支使用 main。
3. push 前必须先确认不会提交 backend/data、node_modules、.env、日志、备份包和任何密钥。
4. 如果远程仓库不是空仓库或出现 push 冲突，禁止 force push，先确认差异并选择合并、拉取或人工迁移。
5. 服务器从 GitHub 更新时使用 scripts/deploy-from-git.sh，不直接覆盖 data 目录。
