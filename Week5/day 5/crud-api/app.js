const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// part 3
const { fetchPosts } = require('./data/dataService');

app.get('/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        console.log('posts fetched successfully');
        res.json(posts);
    } catch (error) {
        console.error('error fetching posts:', error.message);
        res.status(500).json({ error: 'failed to fetch posts' });
    }
})
