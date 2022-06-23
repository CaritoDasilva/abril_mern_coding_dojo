const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Debe tener un nombre válido'],
        minlength: [3, 'Debe tener un nombre con mínimo 3 caracteres']
    },
    description: {
        type: String,
        required: [true, 'Debe ingresar una descripción para el post'],
        minlength: [3, 'Debe tener un mínimo de 3 caracteres'],
        maxlength: [100, 'Los posts no pueden exceder los 100 caracteres'],
    },
    image: {
        type: String,
        required: [true, 'Debe ingresar una imagen para el post']
    },
    likes: {
        type: Array
    }
})

const Post = model('Post', postSchema);

module.exports = Post;