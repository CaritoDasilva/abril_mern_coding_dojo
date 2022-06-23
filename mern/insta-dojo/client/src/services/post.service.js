const axios = require('axios');

export const createPost = (post) => axios.post('http://localhost:8080/api/posts', { post });

export const getPosts = () => axios.get('http://localhost:8080/api/posts');

export const deletePost = (id) => axios.delete(`http://localhost:8080/api/posts/delete/${id}`);