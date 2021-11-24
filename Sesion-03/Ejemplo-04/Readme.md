[`Backend Fundamentals`](../../README.md) > [`Sesión 03: Sequelize`](../README.md) > `Ejemplo 4`

# Ejemplo 4: Consultas a la base de datos

**Objetivos**

- Hacer consultas a la base de datos usando el ORM.
- Entender la estructura de una consulta en Sequelize.
- Ver las diferencias entre las funciones `findOne` y `findAll` para consultas a la base de datos.

**Requerimientos**

- Haber terminado los ejemplos y retos anteriores.

---

Nuestra aplicación de _backend_ debe ser capaz de resolver el CRUD completo de cada una de las entidades. En este momento nuestra aplicación solo manipula la base de datos así que vamos a ver como definir las operaciones CRUD usando el ORM, recordemos que CRUD significa:

 - **C - Create** insertar nuevos registros
 - **R - Read** consultar los registros existentes
 - **U - Update** modificar registros
 - **D - Delete** eliminar registros


## Insertar registros

Para crear registros vamos a usar la función `Model.create()` de Sequelize. Que tiene la siguiente sintaxis:

```javascript
Model.create({ atributo1: "valor", atributo2: "valor", ...});
```

Por ejemplo, para crear un Producto nuevo lo podemos hacer con el siguiente código:

```javascript
Product.create({ 
	id : 101, 
	nombre: "Planta",
	precio: 230.0,
	cat: "Seres vivos",
	desc: "Planta de interior, con maceta"
})
.then(res => { console.log(res) })
```

Se puede comprobar en pgAdmin que el producto realmente se agrego a la base de datos. 

## Consultar Registros

Para hacer consultas a la base de datos, tenemos 2 funciones:

- `Model.findOne()` que regresa el primer registro resultante de la consulta.
- `Model.findAll()` que regresa todos los registros resultantes de la consulta.

Para seleccionar solo algunos atributos, puede usar la opción de `attributes`:

```javascript
Model.findAll({
  attributes: ['foo', 'bar']
});
```

Que sería equivalente a la consulta:

```sql
SELECT foo, bar FROM Model;
```

También podemos renombrar los atributos en el resultado de la siguiente forma:

```javascript
Model.findAll({
  attributes: ['foo', ['bar', 'baz'], 'qux']
});
```

Que sería equivalente a la consulta:

```sql
SELECT foo, bar AS baz, qux FROM Model;
```

También podemos agregar condiciones a nuestra consulta con la clausula `where`. La opción `where` se utiliza para filtrar la consulta. Hay muchos operadores para usar para la cláusula where, disponibles como Símbolos de `Op`.

Para usarlos tenemos que importarlos en nuestro archivo directamente desde Sequelize, por lo que modificamos la primera linea del archivo **app.js** para incluir esa importación, quedando como:

```javascript
const { Sequelize, DataTypes, Op } = require('sequelize');
```
Por ejemplo para encontrar todos los productos con precio de 300 la consulta es:

```javascript
Producto.findAll({
	where: {
		precio : 300
	}
})
.then(products =>
	console.log("All products:", JSON.stringify(products, null, 2))
)
```

Que sería equivalente a la consulta:

```sql
SELECT * FROM Producto WHERE precio = 300;
```

Pero si queremos los productos con precio mayor o igual a 350. Usamos el código:

```javascript
Producto.findAll({
	where: {
		precio : {
			[Op.gte] : 350
		}
	}
})
.then(products =>
	console.log("All products:", JSON.stringify(products, null, 2))
)
```

Que sería equivalente a la consulta:

```sql
SELECT * FROM Producto WHERE precio >= 300;
```

También podemos limitar el número de registros resultante con la sentencia `limit`. Por ejemplo queremos 10 productos con precios mayores o iguales a 350, lo que se resuelve como:

```javascript
Producto.findAll({
	limit: 10,
	where: {
		precio : {
			[Op.gte] : 350
		}
	}
})
.then(products =>
	console.log("All products:", JSON.stringify(products, null, 2))
)
```
Que sería equivalente a la consulta:

```sql
SELECT * FROM Producto WHERE precio >= 350 LIMIT 10;
```

Y podemos ordenar los resultados con la clausula `order`. Por ejemplo si queremos los 10 productos mas caros se resuelve con:

```javascript
Producto.findAll({
	limit: 10,
	order : [['precio' , 'ASC']]
})
.then(products =>
	console.log("All products:", JSON.stringify(products, null, 2))
)
```

Que sería equivalente a la consulta:

```sql
SELECT * FROM Producto LIMIT 10 ORDER BY precio;
```

La opción de orden toma un arreglo de elementos para ordenar la consulta. Estos elementos son en sí mismos arreglos de la forma `[columna, dirección]`. La dirección puede ser una de las siguiente  opciones `ASC`, `DESC` o `NULLS FIRST`.

## Modificar registros

Para modificar registros usamos la función `Model.update()`

Las consultas de actualización también aceptan la opción `where`, al igual que las consultas de lectura que se muestran arriba.

Por ejemplo para modificar el producto que acabamos de crear lo hacemos de la siguiente forma:

```javascript
Producto.update({ nombre: "Monstera" }, {
  where: {
    id: 101
  }
})
.then(res => { console.log(res) })
```

## Eliminar registros

Para modificar registros usamos la función `Model.destroy()`

Las consultas de eliminación también aceptan la opción `where`, al igual que las consultas anteriores.

Por ejemplo para eliminar el mismo producto, se hace de la siguiente forma:

```javascript
Product.destroy({
  where: {
    id: 101
  }
})
.then(res => { console.log(res) })
```

[`Atrás: Ejemplo 01`](Ejemplo-01) | [`Siguiente: Reto 01`](../Reto-01)
