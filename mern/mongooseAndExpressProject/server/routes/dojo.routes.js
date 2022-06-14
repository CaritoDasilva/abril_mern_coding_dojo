const { getAllDojos, createDojo, addInstructorsToDojo, getStudents, getDojo, updateDojo, deleteDojo } = require('../controllers/dojos.controllers');

module.exports = (app) => {
    app.get('/api/dojos', getAllDojos);
    app.get('/api/dojos/students', getStudents);
    app.get('/api/dojos/:id', getDojo);
    app.post('/api/dojos', createDojo);
    app.put('/api/dojos/instructors/:id', addInstructorsToDojo);
    app.put('/api/dojos/update/:id', updateDojo);
    app.delete('/api/dojos/delete/:id', deleteDojo);
}
