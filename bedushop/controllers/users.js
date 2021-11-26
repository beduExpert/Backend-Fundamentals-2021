const { Sequelize, DataTypes, Op } = require('sequelize');
const Usuario = require('../models/Users')
const passport = require('passport');

function crearUsuario(req, res, next) {
  const body = req.body,
    password = body.password

  delete body.password
  const usuario = Usuario.build(body)
  pass = Usuario.crearPassword(password)
  usuario.salt = pass.salt
  usuario.hash = pass.hash
  console.log(usuario)
  usuario.save().then(user => {                                         //Guardando nuevo usuario en Postgres.
    return res.status(201).json(Usuario.toAuthJSON(usuario))
  }).catch(next)
}

function obtenerUsuarios(req, res, next) {
  console.log(req)
  Usuario.findOne({where : { username : req.usuario.username}})
  .then(user  => {//Obteniendo usuario desde Postgres.
    console.log(user)
    if (!user) {
      return res.sendStatus(401)
    }
    return res.json(user);
  })
  .catch(next);
}

function modificarUsuario(req, res, next) {
  var body = req.body;
  Usuario.update(body, { where : { username : req.usuario.username }})
  .then(user => {
    res.status(201).send(`Se modifico el usuario ${user}`)
  }).catch(next)
}

function eliminarUsuario(req, res) {
  // únicamente borra a su propio usuario obteniendo el id del token
   Usuario.destroy({
     where: {
       username: req.usuario.username
     }
   })
   .then(user =>
      res.status(201).send(`Se elimino el usuario ${user}`)
   )
}

function iniciarSesion(req, res, next) {
  if (!req.body.email) {
    return res.status(422).json({ errors: { email: "no puede estar vacío" } });
  }

  if (!req.body.password) {
    return res.status(422).json({ errors: { password: "no puede estar vacío" } });
  }

  passport.authenticate('local', { session: false }, function (err, user, info) {
    if (err) { return next(err); }

    if (user) {
      user.token = Usuario.generarJWT(user);
      return res.json({ user: user.toAuthJSON() });
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
}

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  modificarUsuario,
  eliminarUsuario,
  iniciarSesion
}
