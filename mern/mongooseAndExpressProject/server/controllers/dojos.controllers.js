const Dojo = require('../models/dojo.model');

module.exports.getAllDojos = (req, res) => {
    Dojo.find()
        .then(dojos => res.json({ dojos }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups no hemos podido traerte las sucursales' }));
};

module.exports.createDojo = (req, res) => {
    console.log("🚀 ~ file: dojos.controllers.js ~ line 11 ~ req.body", req.body.dojo)
    Dojo.create(req.body.dojo)
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