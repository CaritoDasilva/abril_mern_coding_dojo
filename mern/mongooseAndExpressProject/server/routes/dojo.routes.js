const { getAllDojos, createDojo, addInstructorsToDojo } = require('../controllers/dojos.controllers');

module.exports = (app) => {
    app.get('/api/dojos', getAllDojos);
    app.post('/api/dojos', createDojo);
    app.put('/api/dojos/instructors/:id', addInstructorsToDojo);
}