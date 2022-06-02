const { Schema, model } = require('mongoose');

const dojoSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Debe tener un nombre válido'],
        minlength: [3, 'Debe tener un nombre con mínimo 3 caracteres']
    },
    instructors: {
        type: Array
    },
    qtyStudents: {
        type: Number
    },
    address: {
        type: String,
        required: [true, 'Debe tener una dirección válida']
    }
})

const Dojo = model('Dojo', dojoSchema);

module.exports = Dojo;
