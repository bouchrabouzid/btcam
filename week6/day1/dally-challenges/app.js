const express = require('express');
const session = require('express-session');
const app = express();
const quizRoutes = require('./routes/quiz');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'trivia-secret',
  resave: false,
  saveUninitialized: true
}));

app.use('/quiz', quizRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Trivia Quiz Game is running on http://localhost:${PORT}`);
});
