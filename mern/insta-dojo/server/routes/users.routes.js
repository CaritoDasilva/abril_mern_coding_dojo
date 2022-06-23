const { authenticate } = require('../config/jwt.config');
const { register, login, ingreso } = require('../controllers/users.controllers');

module.exports = app => {
    app.post('/api/users/register', register);
    app.post('/api/users/login', login);
    app.get('/api/users/ingreso', authenticate, ingreso);
}