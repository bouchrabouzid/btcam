const express = require('express');
const router = express.Router();
let books = [];
let bookId = 1;

router.get('/', (req, res) => {
  res.json(books);
});

router.post('/', (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: bookId++, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const book = books.find(b => b.id == id);
  if (book) {
    book.title = title;
    book.author = author;
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  books = books.filter(b => b.id != id);
  res.json({ message: 'Book deleted successfully' });
});

module.exports = router;
