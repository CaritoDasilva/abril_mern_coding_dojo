const { greeting, getUsers } = require('../controllers/api.controller');

module.exports = (app) => {
    app.get("/api", greeting);
    app.post('/api/users', getUsers);
}