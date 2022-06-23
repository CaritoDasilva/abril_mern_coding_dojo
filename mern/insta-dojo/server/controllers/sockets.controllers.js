const socket = require('socket.io');
const Post = require('../models/post.model');
const { getAllPosts } = require('./posts.controllers');
const saludo = 'Saludos desde el server';


module.exports.socketsEvents = (server) => {

    const io = socket(server, { cors: true });
    io.on("connection", async socket => {
        console.log(socket.id);
        const posts = await Post.find();
        io.emit("from-server", posts );
        socket.on("from-client", newArrPosts => {
            io.emit("from-server", newArrPosts );
        })
    })
}