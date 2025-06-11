const express = require('express');
const fs = require('fs');
const path = require('path');
const usersRouter = require('./routes/users');

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use('/api', usersRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
