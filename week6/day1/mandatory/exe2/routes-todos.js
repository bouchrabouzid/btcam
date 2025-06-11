const express = require('express');
const router = express.Router();
let todos = [];
let currentId = 1;

router.get('/', (req, res) => {
  res.json(todos);
});

router.post('/', (req, res) => {
  const { title } = req.body;
  const newTodo = { id: currentId++, title };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const todo = todos.find(t => t.id == id);
  if (todo) {
    todo.title = title;
    res.json(todo);
  } else {
    res.status(404).json({ message: 'To-do item not found' });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(t => t.id != id);
  res.json({ message: 'Deleted successfully' });
});

module.exports = router;
