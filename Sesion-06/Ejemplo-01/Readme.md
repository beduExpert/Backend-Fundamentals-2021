[`Backend Fundamentals`](../../README.md) > [`Sesión 06`](../README.md) > `Ejemplo 1`

# Ejemplo 1: Validaciones

## Objetivo

- Completar el esquema descrito para usuarios en la sesión anterior con restricciones y seguridad.

## Requerimientos

## Desarrollo

1. El esquema generado para el modelo <b>Usuario</b> en la sesión anterior se ve de la siguiente forma:

```jsx
   // User.js
    const { Sequelize, DataTypes, Op } = require('sequelize');
    const sequelize = require('../config/db')
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      username: {
        type: DataTypes.TEXT,
      },
      nombre: {
        type: DataTypes.TEXT
      },
      apellido: {
        type: DataTypes.TEXT
      },
      email: {
        type: DataTypes.TEXT
      },
      pasword: {
        type: DataTypes.TEXT
      },
      direccion: {
        type: DataTypes.TEXT
      },
      tarjeta: {
        type: DataTypes.TEXT
      },
      tipo: {
        type: DataTypes.TEXT,
      }
    }, {
      freezeTableName: true,
      timestamps: false
    });
    module.exports = User;       
```    

2. Añadiendo validaciones al modelo de <b>Usuario</b>.

```jsx
// User.js
const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize = require('../config/db')
const crypto = require('crypto');
const jwt = require('jsonwebtoken'); 
const secret = require('../config').secret;  

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    validate:{
        isLowercase: true,
        is: /^[a-zA-Z0-9]+$/
    }
  },
  nombre: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    validate: {
        isEmail: true,
    }
  },
  salt: {
    type: DataTypes.TEXT
  },
  hash: {
    type: DataTypes.TEXT
  },
  direccion: {
    type: DataTypes.TEXT
  },
  tarjeta: {
    type: DataTypes.TEXT,
    validate:{
        len: 16,
    }
  },
  tipo: {
    type: DataTypes.TEXT,
    validate:{
        isIn: [['Comprador', 'Vendedor']]
    }
  }
}, {
  freezeTableName: false,
  timestamps: false
});

module.exports = User;
```

  Las validaciones son comprobaciones realizadas en el nivel Sequelize, en JavaScript puro. Pueden ser arbitrariamente complejos si proporciona una función de validación personalizada, o pueden ser uno de los validadores integrados que ofrece Sequelize. Si falla una validación, no se enviará ninguna consulta SQL a la base de datos. Éstas se escriben dentro del objeto `validate`.

  Por otro lado, las restricciones son reglas definidas a nivel de SQL. El ejemplo más básico de restricción es una restricción única. Si falla una verificación de restricción, la base de datos arrojará un error y Sequelize enviará este error a JavaScript (en este ejemplo, arrojará un SequelizeUniqueConstraintError). Tenga en cuenta que en este caso se realizó la consulta SQL, a diferencia del caso de las validaciones.

  Hay que observar que en la nueva implementación del modeo de usuarios ya no almacenamos la contraseña sino que almacenamos una combinación de atributos `salt` y `hash` que nos ayudarán a guardar de forma segura la contraseña mediante un cifrado que haremos en el próximo ejemplo.



[`Atrás`](../README.md) | [`Siguiente`](../Ejemplo-02)
