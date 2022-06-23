const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

module.exports.register = async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.json({ user, msg: "Se ha registrado de manera exitosa!" });

    } catch(err) {
        return res.status(500).json({ msg: "No hemos podido registrar el usuario!", error: err });
    }
}

module.exports.login = async (req, res) => {
    try {

        const user = await User.findOne({email: req.body.email});

        if(!user) {
            return res.status(403).json({ msg: 'Email no corresponde a ninguno de nuestros usuarios' });
        } else {
            const isValidPassword = await bcrypt.compare(req.body.password, user.password);
            if(isValidPassword) {
                const newJWT = jwt.sign({
                    _id: user._id,
                    name: user.name
                }, process.env.SECRET_KEY);

                return res
                    .cookie('usertoken', newJWT, process.env.SECRET_KEY, { httpOnly: true })
                    .json({
                        message: "Se ha logueado de manera exitosa"
                    });
            } else {
                return res.status(403).json({ msg: 'Contraseña inválida' });
            }
        }

    }catch(err) {
        console.log("🚀 ~ file: users.controllers.js ~ line 40 ~ module.exports.login= ~ err", err)
        return res.status(403).json({ msg: 'Credenciales inválidas', err })
    }

};

module.exports.ingreso = (_, res) => {
    try {
        res.json({ msg: 'Bienvenido! eres de la casa' })

    } catch(err) {
        return res.status(403).json({ msg: 'Te vas ahora mismo, no tienes permisos', err })
    }
}