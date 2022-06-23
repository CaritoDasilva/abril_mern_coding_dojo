const Post = require('../models/post.model');

module.exports.getAllPosts = (req, res) => {
    Post.find()
        .then(posts => res.json({ posts }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups no hemos podido traerte los posts' }));
}

module.exports.getOnePost = (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json({ post }))
        .catch(err => res.status(404).json({ error: err, msg: 'Ups no hemos podido traerte el post' }));
}

module.exports.createPost = (req, res) => {
    Post.create(req.body.post)
        .then(newPost => res.json({ newPost }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups no hemos podido crear un nuevo post' }));
}

module.exports.updatePost = (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body.post, { new: true })
        .then(updatedPost => res.json({ updatedPost }))
        .catch(err => res.status(500).json({ msg: 'Ups no hemos podido actualizar el Post', error: err }));
}

module.exports.deletePost = (req, res) => {
    Post.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json({ deleteConfirmation }))
        .catch(err => res.status(500).json({ msg: 'Ups no hemos podido borrar el Post', error: err }));
}
