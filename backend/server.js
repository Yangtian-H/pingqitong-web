const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const HOST = '127.0.0.1';
const PORT = Number(process.env.PORT || 3000);

app.use(cors());
app.use(express.json({ limit: '2mb' }));

const dataDir = path.join(__dirname, 'data');
fs.mkdirSync(dataDir, { recursive: true });

const files = {
  users: path.join(dataDir, 'users.json'),
  profiles: path.join(dataDir, 'profiles.json'),
  configs: path.join(dataDir, 'configs.json'),
  posts: path.join(dataDir, 'posts.json'),
  reviews: path.join(dataDir, 'reviews.json'),
  jwtSecret: path.join(dataDir, 'jwt_secret.txt')
};

function ensureJson(file, fallback) {
  if (!fs.existsSync(file)) fs.writeFileSync(file, JSON.stringify(fallback, null, 2));
}

ensureJson(files.users, []);
ensureJson(files.profiles, {});
ensureJson(files.configs, []);
ensureJson(files.posts, [
  { id: 'seed-1', title: '预算 1200，正手国套反手涩套怎么配？', body: '目前横板两面弧圈，反手想更稳一点。', status: '已通过', likes: 28, userId: '', nickname: '系统示例', createdAt: new Date().toISOString() },
  { id: 'seed-2', title: '樊振东 ALC 对新手是不是太快', body: '试打半小时很爽，但小球有点飘。', status: '已通过', likes: 19, userId: '', nickname: '系统示例', createdAt: new Date().toISOString() }
]);
ensureJson(files.reviews, []);

function getJwtSecret() {
  if (process.env.JWT_SECRET && process.env.JWT_SECRET.trim()) return process.env.JWT_SECRET.trim();
  if (fs.existsSync(files.jwtSecret)) return fs.readFileSync(files.jwtSecret, 'utf8').trim();
  const secret = crypto.randomBytes(48).toString('hex');
  fs.writeFileSync(files.jwtSecret, secret);
  return secret;
}

const JWT_SECRET = getJwtSecret();

function readJson(file, fallback) {
  try {
    if (!fs.existsSync(file)) return fallback;
    const raw = fs.readFileSync(file, 'utf8');
    if (!raw.trim()) return fallback;
    return JSON.parse(raw);
  } catch (error) {
    console.error(`读取 JSON 失败：${file}`, error);
    return fallback;
  }
}

function writeJson(file, value) {
  const tmp = `${file}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(value, null, 2));
  fs.renameSync(tmp, file);
}

function normalizeUsername(username) {
  return String(username || '').trim().toLowerCase();
}

function isValidUsername(username) {
  return /^[a-zA-Z0-9_]{3,20}$/.test(username);
}

function isValidPassword(password) {
  if (typeof password !== 'string') return false;
  if (password.length < 8 || password.length > 15) return false;
  if (!/[A-Za-z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;
  if (/^(12345678|11111111|00000000|password|qwerty)/i.test(password)) return false;
  return true;
}

function createId(prefix) {
  return `${prefix}_${Date.now().toString(36)}_${crypto.randomBytes(4).toString('hex')}`;
}

function cleanText(value, max = 200) {
  if (value === undefined || value === null) return '';
  return String(value).trim().slice(0, max);
}

function hasRiskText(text) {
  return /加微|VX|返利|代理|广告|包过|私聊/i.test(text || '');
}

function publicUser(user) {
  if (!user) return null;
  return {
    id: user.id,
    username: user.username,
    nickname: user.nickname || user.username,
    role: user.role || 'user',
    status: user.status || 'active',
    email: user.email || '',
    phone: user.phone || '',
    emailVerified: Boolean(user.emailVerified),
    phoneVerified: Boolean(user.phoneVerified),
    createdAt: user.createdAt
  };
}

function signToken(user) {
  return jwt.sign(
    { id: user.id, username: user.username, role: user.role || 'user' },
    JWT_SECRET,
    { expiresIn: '30d' }
  );
}

function normalizeExistingUsers() {
  const users = readJson(files.users, []);
  let changed = false;
  let hasAdmin = users.some((user) => user.role === 'admin');

  users.forEach((user, index) => {
    const normalized = normalizeUsername(user.username);
    if (user.username !== normalized) {
      user.username = normalized;
      changed = true;
    }
    if (!user.status) {
      user.status = 'active';
      changed = true;
    }
    if (!user.role) {
      user.role = !hasAdmin && index === 0 ? 'admin' : 'user';
      if (user.role === 'admin') hasAdmin = true;
      changed = true;
    }
    if (user.emailVerified === undefined) {
      user.emailVerified = false;
      changed = true;
    }
    if (user.phoneVerified === undefined) {
      user.phoneVerified = false;
      changed = true;
    }
  });

  if (changed) writeJson(files.users, users);
}

normalizeExistingUsers();

function authOptional(req, res, next) {
  const header = req.headers.authorization || '';
  const match = header.match(/^Bearer\s+(.+)$/i);
  if (!match) return next();

  try {
    const payload = jwt.verify(match[1], JWT_SECRET);
    const users = readJson(files.users, []);
    const user = users.find((item) => item.id === payload.id);
    if (user && user.status !== 'disabled') req.user = user;
  } catch {
    // 忽略无效 token，让需要登录的接口自己返回 401
  }

  next();
}

function authRequired(req, res, next) {
  authOptional(req, res, () => {
    if (!req.user) return res.status(401).json({ ok: false, message: '请先登录' });
    next();
  });
}

function adminRequired(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ ok: false, message: '无管理员权限' });
  }
  next();
}

app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'pingqitong-backend', message: '乒器通后端运行正常', time: new Date().toISOString() });
});

app.get('/api/auth/check-username', (req, res) => {
  const username = normalizeUsername(req.query.username);
  if (!isValidUsername(username)) {
    return res.json({ ok: true, available: false, message: '账号必须为 3-20 位英文、数字或下划线' });
  }
  const users = readJson(files.users, []);
  const existed = users.some((user) => normalizeUsername(user.username) === username);
  res.json({ ok: true, available: !existed, message: existed ? '账号已存在，请换一个' : '账号可用' });
});

app.post('/api/auth/register', async (req, res) => {
  const username = normalizeUsername(req.body.username || req.body.account);
  const password = String(req.body.password || '');
  const nickname = cleanText(req.body.nickname || username, 20);

  if (!isValidUsername(username)) {
    return res.status(400).json({ ok: false, message: '账号必须为 3-20 位英文、数字或下划线' });
  }
  if (!isValidPassword(password)) {
    return res.status(400).json({ ok: false, message: '密码必须为 8-15 位，并且至少包含字母和数字，不能使用常见弱密码' });
  }
  if (!nickname) {
    return res.status(400).json({ ok: false, message: '昵称不能为空' });
  }

  const users = readJson(files.users, []);
  const exists = users.some((user) => normalizeUsername(user.username) === username);
  if (exists) {
    return res.status(409).json({ ok: false, message: '账号已存在，请换一个' });
  }

  const now = new Date().toISOString();
  const hasAdmin = users.some((user) => user.role === 'admin');
  const user = {
    id: createId('user'),
    username,
    nickname,
    passwordHash: await bcrypt.hash(password, 10),
    role: hasAdmin ? 'user' : 'admin',
    status: 'active',
    email: '',
    phone: '',
    emailVerified: false,
    phoneVerified: false,
    createdAt: now,
    updatedAt: now
  };

  users.push(user);
  writeJson(files.users, users);

  const profiles = readJson(files.profiles, {});
  profiles[user.id] = { nickname, region: '', kaiqiu: '', hand: '', currentBlade: '', currentFh: '', currentBh: '', updatedAt: now };
  writeJson(files.profiles, profiles);

  res.json({ ok: true, token: signToken(user), user: publicUser(user), profile: profiles[user.id] });
});

app.post('/api/auth/login', async (req, res) => {
  const username = normalizeUsername(req.body.username || req.body.account);
  const password = String(req.body.password || '');
  const users = readJson(files.users, []);
  const user = users.find((item) => normalizeUsername(item.username) === username);

  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return res.status(401).json({ ok: false, message: '账号或密码错误' });
  }
  if (user.status === 'disabled') {
    return res.status(403).json({ ok: false, message: '账号已被禁用，请联系管理员' });
  }

  res.json({ ok: true, token: signToken(user), user: publicUser(user) });
});

app.post('/api/auth/logout', (req, res) => res.json({ ok: true }));

app.get('/api/auth/me', authRequired, (req, res) => {
  const profiles = readJson(files.profiles, {});
  res.json({ ok: true, user: publicUser(req.user), profile: profiles[req.user.id] || {} });
});

app.get('/api/profile', authRequired, (req, res) => {
  const profiles = readJson(files.profiles, {});
  res.json({ ok: true, data: profiles[req.user.id] || { nickname: req.user.nickname || req.user.username, region: '', kaiqiu: '', hand: '', currentBlade: '', currentFh: '', currentBh: '' } });
});

app.put('/api/profile', authRequired, (req, res) => {
  const profiles = readJson(files.profiles, {});
  const now = new Date().toISOString();
  const profile = {
    nickname: cleanText(req.body.nickname || req.user.nickname || req.user.username, 20),
    region: cleanText(req.body.region, 50),
    kaiqiu: cleanText(req.body.kaiqiu, 30),
    hand: cleanText(req.body.hand, 30),
    currentBlade: cleanText(req.body.currentBlade, 80),
    currentFh: cleanText(req.body.currentFh, 80),
    currentBh: cleanText(req.body.currentBh, 80),
    updatedAt: now
  };

  profiles[req.user.id] = profile;
  writeJson(files.profiles, profiles);

  const users = readJson(files.users, []);
  const index = users.findIndex((user) => user.id === req.user.id);
  if (index >= 0) {
    users[index].nickname = profile.nickname;
    users[index].updatedAt = now;
    writeJson(files.users, users);
    req.user = users[index];
  }

  res.json({ ok: true, data: profile, user: publicUser(req.user) });
});

app.get('/api/configs', authRequired, (req, res) => {
  const configs = readJson(files.configs, []);
  const ownConfigs = configs.filter((item) => item.userId === req.user.id).sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
  res.json({ ok: true, data: ownConfigs });
});

app.post('/api/configs', authRequired, (req, res) => {
  const configs = readJson(files.configs, []);
  const now = new Date().toISOString();
  const config = {
    id: createId('cfg'),
    userId: req.user.id,
    name: cleanText(req.body.name || req.body.title || req.body.comboName || '未命名配置', 120),
    blade: cleanText(req.body.blade, 120),
    forehand: cleanText(req.body.forehand || req.body.fh, 120),
    backhand: cleanText(req.body.backhand || req.body.bh, 120),
    note: cleanText(req.body.note || req.body.summary, 1000),
    raw: req.body,
    createdAt: now,
    updatedAt: now
  };
  configs.push(config);
  writeJson(files.configs, configs);
  res.json({ ok: true, data: config, id: config.id });
});

app.delete('/api/configs/:id', authRequired, (req, res) => {
  const configs = readJson(files.configs, []);
  const before = configs.length;
  const next = configs.filter((item) => !(item.id === req.params.id && item.userId === req.user.id));
  writeJson(files.configs, next);
  res.json({ ok: true, deleted: before - next.length });
});

app.get('/api/posts', (req, res) => {
  const posts = readJson(files.posts, []);
  res.json({ ok: true, data: posts.sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt))) });
});

app.post('/api/posts', authRequired, (req, res) => {
  const posts = readJson(files.posts, []);
  const title = cleanText(req.body.title, 100);
  const body = cleanText(req.body.body, 1000);
  if (!title || !body) return res.status(400).json({ ok: false, message: '标题和内容不能为空' });

  const post = { id: createId('post'), userId: req.user.id, nickname: req.user.nickname || req.user.username, title, body, status: hasRiskText(`${title} ${body}`) ? '人工复核' : '已通过', likes: 0, createdAt: new Date().toISOString() };
  posts.push(post);
  writeJson(files.posts, posts);
  res.json({ ok: true, data: post });
});

app.post('/api/reviews', authRequired, (req, res) => {
  const reviews = readJson(files.reviews, []);
  const text = cleanText(req.body.text, 500);
  const equipmentId = cleanText(req.body.equipmentId, 80);
  const score = Number(req.body.score || 0);
  if (!equipmentId || !text) return res.status(400).json({ ok: false, message: '器材和评论内容不能为空' });

  const review = { id: createId('review'), userId: req.user.id, nickname: req.user.nickname || req.user.username, equipmentId, score: Number.isFinite(score) ? score : 0, text, status: hasRiskText(text) ? '人工复核' : '已通过', likes: 0, createdAt: new Date().toISOString() };
  reviews.push(review);
  writeJson(files.reviews, reviews);
  res.json({ ok: true, data: review });
});

app.get('/api/admin/users', authRequired, adminRequired, (req, res) => {
  const users = readJson(files.users, []);
  const profiles = readJson(files.profiles, {});
  res.json({
    ok: true,
    data: users.map((user) => ({ ...publicUser(user), profile: profiles[user.id] || {} })).sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)))
  });
});

app.patch('/api/admin/users/:id/status', authRequired, adminRequired, (req, res) => {
  const users = readJson(files.users, []);
  const user = users.find((item) => item.id === req.params.id);
  if (!user) return res.status(404).json({ ok: false, message: '用户不存在' });
  if (user.id === req.user.id && req.body.status === 'disabled') return res.status(400).json({ ok: false, message: '不能禁用当前登录的管理员账号' });
  user.status = req.body.status === 'disabled' ? 'disabled' : 'active';
  user.updatedAt = new Date().toISOString();
  writeJson(files.users, users);
  res.json({ ok: true, user: publicUser(user) });
});

app.patch('/api/admin/users/:id/role', authRequired, adminRequired, (req, res) => {
  const users = readJson(files.users, []);
  const user = users.find((item) => item.id === req.params.id);
  if (!user) return res.status(404).json({ ok: false, message: '用户不存在' });
  user.role = req.body.role === 'admin' ? 'admin' : 'user';
  user.updatedAt = new Date().toISOString();
  writeJson(files.users, users);
  res.json({ ok: true, user: publicUser(user) });
});

app.get('/api/admin/configs', authRequired, adminRequired, (req, res) => {
  const configs = readJson(files.configs, []);
  const users = readJson(files.users, []);
  const userMap = Object.fromEntries(users.map((user) => [user.id, publicUser(user)]));
  res.json({
    ok: true,
    data: configs.map((item) => ({ ...item, user: userMap[item.userId] || null })).sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)))
  });
});

app.use((req, res) => res.status(404).json({ ok: false, message: '接口不存在' }));

app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({ ok: false, message: '服务器内部错误' });
});

app.listen(PORT, HOST, () => {
  console.log(`Pingqitong backend running at http://${HOST}:${PORT}`);
});
