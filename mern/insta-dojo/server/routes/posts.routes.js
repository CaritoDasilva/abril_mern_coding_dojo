const { getAllPosts, getOnePost, createPost, updatePost, deletePost } = require('../controllers/posts.controllers');

module.exports = (app) => {
    app.get('/api/posts', getAllPosts);
    app.get('/api/posts/:id', getOnePost);
    app.post('/api/posts', createPost);
    app.put('/api/posts/update/:id', updatePost);
    app.delete('/api/posts/delete/:id', deletePost);
}
