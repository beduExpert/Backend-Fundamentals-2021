// Estructura del CRUD
const router = require('express').Router();
const {
  crearProducto,
  obtenerProductos,
  modificarProducto,
  eliminarProducto
} = require('../controllers/productos')

router.get('/', obtenerProductos)
router.post('/', crearProducto)
router.put('/:id', modificarProducto)
router.delete('/:id', eliminarProducto)

module.exports = router;
