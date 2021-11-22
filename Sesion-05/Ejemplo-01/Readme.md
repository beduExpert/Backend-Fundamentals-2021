[`Backend Fundamentals`](../../README.md) > [`Sesión 05`](../README.md) > `Ejemplo 1`

# Ejemplo 1: Modularización del proyecto.

## Objetivo

Modularizar el el proyecto para seguir el MVC.

## Requerimientos

Se recomienda tener NodeJS LTS y ExpressJS.

## Desarrollo

Con lo que vimos en la sesión anterior ya podemos definir la API completa y los servicios web para completar el CRUD de los modelos definidos en el ejemplo y reto anterior.

![gif](https://blog-cdn.crowdcontent.com/crowdblog/gif-yay-7.gif)

El problema con esto es que todo lo hemos definido en el mismo archivo `app.js` y mientras mas servicios o rutas queramos definir se volverá intratable. Pero este no es el único problema de tener toda la API definida en un archivo, vimos también que para que nuestra API sea REST debe implementar el MVC, entonces nuestra API tiene que estar perfectamente modularizada. 

Para lograr esto vamos a usar `Express.Router`, los `Routers` son como pequeñas aplicaciones de `Express` que se encargan de definir el comportamiento para el CRUD de un módulo en especifico. De esta forma se separan los servicios que le corresponden a ese módulo en un `Router` diferente en lugar de tenerlos todos en el archivo `app.js`.

1. Primero agregaremos un archivo de configuración para la conexión a la base de datos, dentro de la carpeta `config/` creamos el archivo `db.js` y colocamos en él la conexión con la base de datos que teníamos en `app.js`.

```jsx
const { Sequelize, DataTypes, Op } = require('sequelize');

const sequelize = new Sequelize(
  'database',
  'username', 
  'password',
{
  host: 'host',
  dialect: 'postgres',
  native: true,
  ssl: true
});

module.exports = sequelize
```
2. Modificamos el archivo `app.js` para que utilice esta configuración en lugar de definirla directamente en él.

```jsx
const { Sequelize, DataTypes, Op } = require('sequelize');
const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sequelize = require('./config/db')

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
```

3. En nuestra carpeta `models/` crearemos los archivos de nuestras entidades con su respectivo nombre en el archivo. Revisa que cada archivo tenga un código similar al siguiente

Archivo `models/Producto.js`

```jsx
// Producto.js
const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize = require('../config/db')

const Producto = sequelize.define('Producto', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.TEXT
  },
  precio: {
    type: DataTypes.REAL
  },
  cat: {
    type: DataTypes.TEXT
  },
  desc: {
    type: DataTypes.TEXT
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports = Producto;
```

4. Archivo `models/Producto.js`

```jsx
// Producto.js
/** Constante que representa un producto a vender */
const Producto = sequelize.define('Producto', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.TEXT
  },
  precio: {
    type: DataTypes.REAL
  },
  cat: {
    type: DataTypes.TEXT
  },
  desc: {
    type: DataTypes.TEXT
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports = Producto;
```

### Creando nuestros controladores

5. En la carpeta `controllers/` crearemos el archivo `productos.js` con la siguiente estructura:

```jsx
const { Sequelize, DataTypes, Op } = require('sequelize');
const Producto = require('../models/Producto')

function crearProducto(req, res) {
   var body = req.body;
   Producto.create(body)
   .then(producto => 
      res.status(201).send(producto)
   )
}

function obtenerProductos(req, res) {
  Producto.findAll()
  .then(products =>
    res.status(201).send(products)
  )
}

function modificarProducto(req, res) {
   var body = req.body;
   var id = req.params.id;
   Producto.update( body , {
     where: {
       id: id
     }
   })
   .then(producto =>
      res.status(201).send(products)
   )
}

function eliminarProducto(req, res) {
   var id = req.params.id;
   Producto.destroy({
     where: {
       id: id
     }
   })
   .then(r =>
      res.status(201).send("Se elimino el producto", id)
   )
}

// exportamos las funciones definidas
module.exports = {
  crearProducto,
  obtenerProductos,
  modificarProducto,
  eliminarProducto
}
```

[`Atrás`](../Reto-01) | [`Siguiente`](../Reto-02)
