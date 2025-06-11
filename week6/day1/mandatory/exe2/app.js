const express = require('express');
const app = express();
const todosRoutes = require('./routes/todos');

app.use(express.json());
app.use('/todos', todosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`To-Do API running at http://localhost:${PORT}`);
});
