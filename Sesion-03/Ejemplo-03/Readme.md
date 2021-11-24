[`Backend Fundamentals`](../../README.md) > [`Sesión 03: Sequelize`](../README.md) > `Ejemplo 3`

# Ejemplo 3: Definición de Modelos

**Objetivos**

- Definir los modelos que son la representación de las tablas en Sequelize.

**Requerimientos**

- Haber concluido el ejemplo anterior.

---


Recordemos que estamos usando el patrón Modelo Vista Controlador, para nuestra aplicación la vista es el fronted, y el modelo es la representación de los datos en nuestra aplicación. Para esto usaremos los modelos de Sequelize.

Los modelos son la esencia de Sequelize. Un modelo es una abstracción que representa una tabla de la base de datos. En Sequelize, es una clase que extiende Model.

El modelo le dice a Sequelize varias cosas sobre la entidad que representa, como el nombre de la tabla en la base de datos, qué columnas tiene así como sus tipos de datos.

Un modelo en Sequelize tiene un nombre. Este nombre no tiene que ser el mismo nombre de la tabla que representa en la base de datos. Por lo general, los modelos tienen nombres en singular (como Usuario), aunque esto es meramente una convención.

## Definición del modelo

Los modelos se pueden definir de dos formas equivalentes en Sequelize:

- Llamar a `sequelize.define(modelName, atributos, opciones)`
- Extendiendo `Model` y llamando a `init(atributos, opciones)`

Una vez definido un modelo, este está disponible en `sequelize.models` por su nombre de modelo.

Para aprender vamos a crear un modelo para representar a la tabla Producto. Queremos que nuestro modelo se llame Producto y represente a la tabla correspondiente en nutra base de datos.

Vamos a utilizar la primera forma de definición de modelos.

1. Primero importamos los `Datatypes` directamente desde Sequelize, para esto modificamos la primera linea del archivo **app.js** agregando la importación nueva, quedando como sigue:

```javascript
const { Sequelize, DataTypes } = require('sequelize');
```

2. La sintaxis para definir un modelo es la siguiente:

```javascript
const User = sequelize.define('NombreDelModelo', {
  // Atributos del modelo
  atributo1: {
    type: <Tipo de dato del modelo>
  },
  atributo2: {
    type: <Tipo de dato del modelo>
  }
  ... 
}, {
  // Otras opciones de configuración del modelo
});
```

3. Recordemos que la tabla producto tiene los siguientes atributos:

  - id
  - nombre
  - precio
  - cat
  - desc

Por lo que la definición del modelo queda como sigue:

```javascript
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
```

Entendamos que esta haciendo la instrucción anterior:

- El tipo de dato de cada uno de los atributos es un valor del objeto `Datatypes` que importamos en la primera linea. Para ver una lista completa de los tipos de datos que están disponibles en sequelize consulta el siguiente [enlace](https://sequelize.org/master/manual/model-basics.html#data-types). Es muy importante que estos tipos de dato correspondan tal cual con los definidos en la base de datos.
- En el caso del id agregamos también la opción `allowNull: false` lo que impide que el campo id tenga valores nulos. 
- De igual forma se agrego `primaryKey: true` que indica que id es la llave primaria de la tabla.
- La opción `freezeTableName: true` indica que el nombre del modelo es el mismo que el de la tabla.
- Y `timestamps: false` se agrega para evitar que se agreguen campos a la tabla en donde se almacena la fecha de la última modificación y la creación de los registros.

De forma predeterminada, cuando no se proporciona el nombre de la tabla, Sequelize pluraliza automáticamente el nombre del modelo y lo usa como el nombre de la tabla. es decir si el modelo se llama producto sequelize infiere que la tabla se llama productos. Para evitar esto se usa `freezeTableName: true`.

Tambien podemos indicarle explícitamente el nombre de la tabla de la siguiente forma:

```javascript
sequelize.define('User', {
  // ... (attributes)
}, {
  tableName: 'Employees'
});
```

4. Siguiendo esta misma idea se define el modelo para usuarios como sigue:

```javascript
const Producto = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.TEXT
  },
  apellido: {
    type: DataTypes.REAL
  },
  tarjeta: {
    type: DataTypes.TEXT
  },
  direccion: {
    type: DataTypes.TEXT
  },
  email: {
    type: DataTypes.TEXT
  },
  pasword: {
    type: DataTypes.TEXT
  },
  username: {
    type: DataTypes.TEXT
  }
}, {
  freezeTableName: true,
  timestamps: false
});
```

[`Atrás: Ejemplo 02`](../Ejemplo-02) | [`Siguiente: Reto 03`](../Reto-03)
