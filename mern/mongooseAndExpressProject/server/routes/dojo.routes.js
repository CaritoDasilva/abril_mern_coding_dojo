const { getAllDojos, createDojo, addInstructorsToDojo, getStudents } = require('../controllers/dojos.controllers');
const { getMaxListeners } = require('../models/dojo.model');

module.exports = (app) => {
    app.get('/api/dojos', getAllDojos);
    app.post('/api/dojos', createDojo);
    app.put('/api/dojos/instructors/:id', addInstructorsToDojo);
    app.get('/api/dojos/students', getStudents)
}
