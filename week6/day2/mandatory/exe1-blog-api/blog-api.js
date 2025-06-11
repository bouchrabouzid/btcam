const express = require('express');
const knex = require('knex');

const app = express();
app.use(express.json());

// Configuration de la base de données PostgreSQL
const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'bouchra',
    password: '12345',
    database: 'blog'
  }
});

// Fonctions modèles (équivalent à models/postsModel.js)
const getAllPosts = () => db('posts').select('*');
const getPostById = id => db('posts').where({ id }).first();
const createPost = data => db('posts').insert(data).returning('*');
const updatePost = (id, data) => db('posts').where({ id }).update(data).returning('*');
const deletePost = id => db('posts').where({ id }).del();

// Routes (équivalent à routes/postsRoutes.js + controllers/postsController.js)
app.get('/posts', async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des posts.' });
  }
});

app.get('/posts/:id', async (req, res) => {
  try {
    const post = await getPostById(req.params.id);
    post ? res.json(post) : res.status(404).json({ error: 'Post introuvable.' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});

app.post('/posts', async (req, res) => {
  try {
    const [newPost] = await createPost(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: 'Erreur lors de la création du post.' });
  }
});

app.put('/posts/:id', async (req, res) => {
  try {
    const [updatedPost] = await updatePost(req.params.id, req.body);
    updatedPost
      ? res.json(updatedPost)
      : res.status(404).json({ error: 'Post introuvable.' });
  } catch (error) {
    res.status(400).json({ error: 'Erreur lors de la mise à jour du post.' });
  }
});

app.delete('/posts/:id', async (req, res) => {
  try {
    const deleted = await deletePost(req.params.id);
    deleted
      ? res.json({ message: 'Post supprimé.' })
      : res.status(404).json({ error: 'Post introuvable.' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});

// Route non trouvée
app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée.' });
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});
