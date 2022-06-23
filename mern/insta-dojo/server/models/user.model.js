const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Este campo es requerido']
    },
    email: {
        type: String,
        required: [true, 'Este campo es requerido'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Este campo es requerido']
    }

}, {timestamps: true});

UserSchema.plugin(uniqueValidator);

UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    });
});

const User = model('User', UserSchema);

module.exports = User;