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
    console.log("🚀 ~ file: dojos.controllers.js ~ line 19 ~ req.params.id", req.params.id)
    
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

module.exports.getDojo = (req, res) => {
    Dojo.findById(req.params.id)
        .then(dojo => res.json({ dojo }))
        .catch(err => res.status(404).json({ error: err, msg: 'Ups no hemos podido traerte la sucursal' }));
}

module.exports.updateDojo = (req, res) => {
    Dojo.findByIdAndUpdate(req.params.id, req.body.dojo, { new: true })
        .then(updatedDojo => res.json({ updatedDojo }))
        .catch(err => res.status(500).json({ msg: 'Ups no hemos podido actualizar el Dojo', error: err }))
}

module.exports.deleteDojo = (req, res) => {
    Dojo.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json({ deleteConfirmation }))
        .catch(err => res.status(500).json({ msg: 'Ups no hemos podido borrar el Dojo', error: err }));
}

