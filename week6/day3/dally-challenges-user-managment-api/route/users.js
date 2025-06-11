const express = require('express');
const bcrypt = require('bcrypt');
const fs = require('fs').promises;
const path = require('path');
const router = express.Router();
const filePath = path.join(__dirname, '../users.json');

const readUsers = async () => {
  try {
    const data = await fs.readFile(filePath);
    return JSON.parse(data);
  } catch {
    return [];
  }
};

const writeUsers = async (users) => {
  await fs.writeFile(filePath, JSON.stringify(users, null, 2));
};

// POST /register
router.post('/register', async (req, res) => {
  const { name, lastName, email, username, password } = req.body;
  const users = await readUsers();

  if (users.find(u => u.username === username || u.email === email)) {
    return res.status(400).json({ message: 'error1' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: Date.now().toString(),
    name,
    lastName,
    email,
    username,
    password: hashedPassword
  };

  users.push(newUser);
  await writeUsers(users);
  res.json({ message: 'register' });
});

// POST /login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const users = await readUsers();
  const user = users.find(u => u.username === username);
  
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'error2' });
  }

  res.json({ message: 'login' });
});

// GET /users
router.get('/users', async (req, res) => {
  const users = await readUsers();
  res.json(users);
});

// GET /users/:id
router.get('/users/:id', async (req, res) => {
  const users = await readUsers();
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

// PUT /users/:id
router.put('/users/:id', async (req, res) => {
  const users = await readUsers();
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'User not found' });

  users[index] = { ...users[index], ...req.body };
  await writeUsers(users);
  res.json({ message: 'User updated' });
});

module.exports = router;
