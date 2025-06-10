const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const emojis = [
    { emoji: "😀", name: "Smile" },
    { emoji: "🐶", name: "Dog" },
    { emoji: "🌮", name: "Taco" },
    { emoji: "🚗", name: "Car" },
    { emoji: "📚", name: "Books" },
    { emoji: "🎵", name: "Music" }
];

let currentEmoji = null;
let playerScore = 0;
let leaderboard = [];

function getRandomQuestion() {
    const correct = emojis[Math.floor(Math.random() * emojis.length)];
    const options = [correct.name];

    while (options.length < 4) {
        const random = emojis[Math.floor(Math.random() * emojis.length)].name;
        if (!options.includes(random)) {
            options.push(random);
        }
    }

    options.sort(() => Math.random() - 0.5);

    currentEmoji = correct;
    return { emoji: correct.emoji, options };
}

app.get("/question", (req, res) => {
    const question = getRandomQuestion();
    res.json({ ...question, score: playerScore });
});

app.post("/guess", (req, res) => {
    const { answer, username } = req.body;
    let feedback;

    if (answer === currentEmoji.name) {
        playerScore++;
        feedback = "correct!";
    } else {
        feedback = `wrong It was "${currentEmoji.name}"`;
        playerScore = 0;
    }

    if (username) {
        leaderboard.push({ username, score: playerScore });
        leaderboard.sort((a, b) => b.score - a.score);
        leaderboard = leaderboard.slice(0, 5);
    }

    res.json({
        feedback,
        score: playerScore,
        leaderboard
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});