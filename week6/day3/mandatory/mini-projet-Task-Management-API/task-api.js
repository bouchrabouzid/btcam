const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

const tasksFile = path.join(__dirname, 'tasks.json');

// Fonction utilitaire pour lire les tâches
function readTasks() {
  try {
    const data = fs.readFileSync(tasksFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Fonction utilitaire pour écrire les tâches
function writeTasks(tasks) {
  try {
    fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
  } catch (err) {
    throw new Error('Erreur lors de l’écriture du fichier');
  }
}

// GET /tasks - Liste toutes les tâches
app.get('/tasks', (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// GET /tasks/:id - Détail d'une tâche
app.get('/tasks/:id', (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ error: 'Tâche non trouvée' });
  res.json(task);
});

// POST /tasks - Créer une tâche
app.post('/tasks', (req, res) => {
  const { title, description, completed } = req.body;
  if (!title) return res.status(400).json({ error: 'Le champ "title" est requis' });

  const tasks = readTasks();
  const newTask = {
    id: uuidv4(),
    title,
    description: description || '',
    completed: completed || false
  };

  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
});

// PUT /tasks/:id - Modifier une tâche
app.put('/tasks/:id', (req, res) => {
  const { title, description, completed } = req.body;
  const tasks = readTasks();
  const taskIndex = tasks.findIndex(t => t.id === req.params.id);
  if (taskIndex === -1) return res.status(404).json({ error: 'Tâche non trouvée' });

  const updatedTask = {
    ...tasks[taskIndex],
    title: title ?? tasks[taskIndex].title,
    description: description ?? tasks[taskIndex].description,
    completed: completed ?? tasks[taskIndex].completed
  };

  tasks[taskIndex] = updatedTask;
  writeTasks(tasks);
  res.json(updatedTask);
});

// DELETE /tasks/:id - Supprimer une tâche
app.delete('/tasks/:id', (req, res) => {
  const tasks = readTasks();
  const taskIndex = tasks.findIndex(t => t.id === req.params.id);
  if (taskIndex === -1) return res.status(404).json({ error: 'Tâche non trouvée' });

  const deletedTask = tasks.splice(taskIndex, 1);
  writeTasks(tasks);
  res.json({ message: 'Tâche supprimée', task: deletedTask[0] });
});

// Gestion des routes non trouvées
app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

// Démarrage du serveur
app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});
