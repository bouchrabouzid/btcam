const express = require('express');
const bcrypt = require('bcrypt');
const knex = require('knex');

const app = express();
app.use(express.json());

// Connexion à PostgreSQL via Knex
const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'dbbouchra',
    password: '@@12345',
    database: 'userdb'
  }
});

// POST /register
app.post('/register', async (req, res) => {
  const { email, username, password, first_name, last_name } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ error: 'Champs requis manquants.' });
  }

  try {
    const hash = await bcrypt.hash(password, 10);

    await db.transaction(async trx => {
      const [newUser] = await trx('users')
        .insert({ email, username, first_name, last_name })
        .returning('*');

      await trx('hashpwd').insert({ username, password: hash });

      res.status(201).json({ message: 'Utilisateur enregistré.', user: newUser });
    });
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de l’enregistrement.' });
  }
});

// POST /login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const credentials = await db('hashpwd').where({ username }).first();

    if (!credentials) return res.status(400).json({ error: 'Nom d’utilisateur invalide.' });

    const isValid = await bcrypt.compare(password, credentials.password);
    if (!isValid) return res.status(400).json({ error: 'Mot de passe incorrect.' });

    const userInfo = await db('users').where({ username }).first();
    res.json({ message: 'Connexion réussie.', user: userInfo });
  } catch (err) {
    res.status(500).json({ error: 'Erreur de connexion.' });
  }
});

// GET /users
app.get('/users', async (req, res) => {
  try {
    const users = await db('users').select('*');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs.' });
  }
});

// GET /users/:id
app.get('/users/:id', async (req, res) => {
  try {
    const user = await db('users').where({ id: req.params.id }).first();
    user ? res.json(user) : res.status(404).json({ error: 'Utilisateur non trouvé.' });
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});

// PUT /users/:id
app.put('/users/:id', async (req, res) => {
  try {
    const [updatedUser] = await db('users')
      .where({ id: req.params.id })
      .update(req.body)
      .returning('*');

    updatedUser
      ? res.json(updatedUser)
      : res.status(404).json({ error: 'Utilisateur non trouvé.' });
  } catch (err) {
    res.status(500).json({ error: 'Erreur de mise à jour.' });
  }
});

// Fallback route
app.use((req, res) => {
  res.status(404).json({ error: 'Route introuvable.' });
});

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

