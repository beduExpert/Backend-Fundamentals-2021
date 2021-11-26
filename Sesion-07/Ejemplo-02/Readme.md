[`Backend Fundamentals`](../../README.md) > [`Sesión 07`](../README.md) > `Ejemplo 4`

# Ejemplo 4

## Objetivo

Definir el controlador de usuarios utilizando el manejo de sesiones.

## Requerimientos

Contar con el código de la API que estaba en desarrollo desde la lección 4.

## Desarrollo

    
1. Ahora implementaremos los métodos que nos proporciona Mongoose en nuestro controlador <b>usuarios</b>, es decir:  `controllers/usuarios.js`. 

- Abre el archivo <b>controllers/usuarios.js</b> y comenta el código.
- Copia el siguiente código. 
- Analiza las funciones, encontrarás aquellas que te permitirán hacer operaciones <b>CRUD</b> sobre tu modelo Usuario.
- Recuerda: <b>C - Create, R - Read, U - Update, D - Delete</b>.

```jsx
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
```

7. Por último, actualizar el archivo `routes/usuarios.js` utilizando los middleware de autorización para proteger información sensible de los usuarios.

- Abre el archivo de configuración de endopoints de usuarios, es decir: <b>routes/usuarios.js</b>
- Comenta el código encontrado.
- Inserta el siguiente codigo:

```jsx
const router = require('express').Router();
const {
  crearUsuario,
  obtenerUsuarios,
  modificarUsuario,
  eliminarUsuario,
  iniciarSesion
} = require('../controllers/users')
const auth = require('./auth');

router.get('/', auth.requerido, obtenerUsuarios)
router.get('/:id', auth.requerido, obtenerUsuarios);
router.post('/', crearUsuario)
router.post('/entrar', iniciarSesion)
router.put('/', auth.requerido, modificarUsuario)
router.delete('/', auth.requerido, eliminarUsuario)

module.exports = router;
```
- Analiza el código, observa en que endpoints será necesario el <b>JWT</b> (Su contenido definirá si un usuario tiene o no autorización sobre el endpoint, así como que información puede ver. )

[`Atrás`](../Ejemplo-03) | [`Siguiente`](../Reto-01)
