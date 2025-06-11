const express = require('express');
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" }
];

router.get('/', (req, res) => {
  if (!req.session.index) {
    req.session.index = 0;
    req.session.score = 0;
  }

  if (req.session.index >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }

  const currentQuestion = triviaQuestions[req.session.index].question;
  res.json({
    question: currentQuestion,
    questionNumber: req.session.index + 1
  });
});

router.post('/', (req, res) => {
  const userAnswer = req.body.answer?.trim();
  const currentIndex = req.session.index;

  if (currentIndex >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }

  const correctAnswer = triviaQuestions[currentIndex].answer;
  const isCorrect = userAnswer?.toLowerCase() === correctAnswer.toLowerCase();

  if (isCorrect) req.session.score++;

  req.session.index++;

  res.json({
    result: isCorrect ? 'Correct!' : `Incorrect! The correct answer was "${correctAnswer}".`,
    nextQuestionUrl: '/quiz'
  });
});

router.get('/score', (req, res) => {
  const finalScore = req.session.score || 0;
  const total = triviaQuestions.length;

  req.session.destroy();

  res.json({
    message: `Quiz completed! Your score: ${finalScore} out of ${total}`
  });
});

module.exports = router;
