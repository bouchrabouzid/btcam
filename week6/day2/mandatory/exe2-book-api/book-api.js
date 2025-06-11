const express = require('express');
const knex = require('knex');

const app = express();
app.use(express.json());

// Connexion à PostgreSQL
const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'bouchra',
    password: '12345',
    database: 'booksdb'
  }
});

// Fonctions CRUD (équivalent à models + controllers)
const getAllBooks = () => db('books').select('*');
const getBookById = id => db('books').where({ id }).first();
const createBook = data => db('books').insert(data).returning('*');
const updateBook = (id, data) => db('books').where({ id }).update(data).returning('*');
const deleteBook = id => db('books').where({ id }).del();

// Routes API (équivalent à routes/books.js + app.js)
app.get('/api/books', async (req, res) => {
  try {
    const books = await getAllBooks();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération des livres.' });
  }
});

app.get('/api/books/:bookId', async (req, res) => {
  try {
    const book = await getBookById(req.params.bookId);
    book ? res.json(book) : res.status(404).json({ error: 'Livre introuvable.' });
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});

app.post('/api/books', async (req, res) => {
  try {
    const [newBook] = await createBook(req.body);
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ error: 'Erreur lors de la création du livre.' });
  }
});

app.put('/api/books/:bookId', async (req, res) => {
  try {
    const [updatedBook] = await updateBook(req.params.bookId, req.body);
    updatedBook
      ? res.json(updatedBook)
      : res.status(404).json({ error: 'Livre introuvable.' });
  } catch (err) {
    res.status(400).json({ error: 'Erreur lors de la mise à jour.' });
  }
});

app.delete('/api/books/:bookId', async (req, res) => {
  try {
    const deleted = await deleteBook(req.params.bookId);
    deleted
      ? res.json({ message: 'Livre supprimé.' })
      : res.status(404).json({ error: 'Livre introuvable.' });
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});

// Route non trouvée
app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée.' });
});

// Lancer le serveur
app.listen(5000, () => {
  console.log('Serveur book-api lancé sur http://localhost:5000');
});
