const express = require('express')
const app = express();
const PORT = 3000;

app.use(express.json())

let posts = [
    { id: 1, title: 'First Post', content: 'Hello World!' },
    { id: 2, title: 'Second Post', content: 'Another blog post.' }
];

// get all posts
app.get('/posts', (req, res) => {
    res.json(posts)
})

// grt a post by id
app.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ error: 'Post not found' })
    }

    res.json(post);
})

// post a new post
app.post('/posts', (req, res) => {
    const { title, content } = req.body

    const newPost = {
        id: posts.length + 1,
        title,
        content
    };

    posts.push(newPost)
    res.status(201).json(newPost)
})

// update post
app.put('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, content } = req.body;

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ error: 'Post not found' })
    }

    post.title = title
    post.content = content

    res.json(post)
})

// delete post
app.delete('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id)

    posts = posts.filter(p => p.id !== id)

    res.json({ message: 'Post deleted' });
})

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});