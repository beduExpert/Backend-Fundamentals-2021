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
