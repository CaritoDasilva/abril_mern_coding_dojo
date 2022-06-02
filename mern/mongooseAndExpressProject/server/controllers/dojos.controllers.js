const Dojo = require('../models/dojo.model');

module.exports.getAllDojos = (req, res) => {
    Dojo.find()
        .then(dojos => res.json({ dojos }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups no hemos podido traerte las sucursales' }));
};

module.exports.createDojo = (req, res) => {
    Dojo.create(req.body)
        .then(newDojo => res.json({ newDojo }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups no hemos podido traerte las sucursales' }));
}

module.exports.addInstructorsToDojo = (req, res) => {
    Dojo.findByIdAndUpdate(req.params.id, {
        $push: { instructors: { $each: req.body.instructors } }
        }, 
        { new: true })
        .then(dojo => res.json({ dojo }))
        .catch(err => res.status(404).json({ error: err, msg: 'Ups no hemos podido traerte las sucursales' }))
}
module.exports.getStudents = ( req, res) => {
    Dojo.aggregate([{$group:{_id:null,sumaestudiantes:{$sum:"$qtyStudents"}}}])
        .then(sumStudents => res.json({sumStudents})) 
        .catch(err => res.status(500).json({ error: err, msg: 'Ups no se encontraron estudiantes'}))
}