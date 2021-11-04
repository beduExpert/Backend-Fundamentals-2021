[`Backend Fundamentals`](../../README.md) > [`Sesión 03: Sequelize`](../README.md) > `Ejemplo 1`

# Ejemplo 1: Configuración de Sequelize

**Objetivos**

- Configurar el ORM
- Definir la conexión con la base de datos.

**Requerimientos**

- Node.js
- npm
- Haber realizado las configuraciones e instalaciones descritas en el prework.

---

Cuando queremos interactuar con la base de datos desde una aplicación externa, tenemos dos opciones:

- Utilizar el lenguaje de consulta nativo de la base de datos.
- Utilizar un ORM/ ODM (Object Relational Mapping/Object Data Mapping) que representa los datos como objetos del lenguaje de nuestra aplicación, en este caso JavaScript.

La principal diferencia es cómo vamos a escribir las consultas. En la primera opción tenemos que escribir las consultas directamente en SQL y utilizar una herramienta capaz de ejecutarlas desde nuestra aplicación. Mientras que en la segunda opción se usa el mismo lenguaje en el que se implementa la aplicación (JavaScript).

**¿Cuál es la mejor opción? 😮**

Si nos interesa el desempeño de las consultas (que tan rápido se hacen ⏳) entonces la mejor opción es usar el lenguaje nativo de la base de datos. Esto es debido a que al escribir las consultas directamente estas no pasan por un proceso de traducción lo que aumenta la velocidad en la que se resuelve.

Pero si queremos facilitar el escribir las consultas, lo mejor es usar un ORM/ ODM pues siempre pensamos y escribimos en el mismo lenguaje. También nos ayudan a simplificar el proceso de validación y verificación de los datos.

Otra ventaja del uso de un ORM/ODM sobre el lenguaje nativo de la base de datos es la seguridad que ofrece, pues un ORM/ODM nos ayuda a prevenir inyección de código y también las instrucciones pasan por distintos filtros antes de ejecutarse directamente en la base de datos. 

Usar ORM/ ODM nos ayuda también en el mantenimiento del código, a menos de que el desempeño sea de suma importancia se recomienda mas el uso de estas herramientas.

Por estas razones (principalmente la simplicidad) vamos a usar un ORM llamado **Sequelize**.

> Nota: Se usa un ORM cuando se trabaja con bases de datos relacionales, mientras que un ODM se usa para manejo de bases de datos no relacionales.

1. Para este ejemplo utilizaremos el proyecto que crearon en su prework, el cual tiene la siguiente estructura:

```
adoptapet-api/
├── config/
├── models/
├── controllers/
├── routes/
└── app.js
```

Aunque en esta sesión estaremos definiendo todo el contenido de la aplicación en el archivo **app.js**, pero mas adelante en el módulo esta estructura ira cobrando mas sentido.

2. **Sequelize** es un ORM que funciona con diferentes gestores de bases de datos SQL. Nosotros lo usaremos con PostgreSQL que es el gestor en el que definimos la base de datos en la sesión anterior. Pero también funciona con **mySQL**, **MariaDB**, **SQLite**, entre otros. Para poder usarse con cada uno de estos gestores es necesario instalar el _driver_ correspondiente a cada uno usando `npm`. A continuación mostramos los _drivers_ disponibles y la instrucción para instalarlos.

```bash
$ npm install --save pg pg-hstore # Postgres
$ npm install --save mysql2
$ npm install --save mariadb
$ npm install --save sqlite3
$ npm install --save tedious # Microsoft SQL Server
```

Nosotros en el prework ya hicimos la instalación de Sequelize y el _diver_ de PostgreSQL.

3. Primero es necesario importar Sequelize en nuestro archivo **app.js**, esto se hace con la siguiente linea que pondremos al principio del archivo.

```javascript
const { Sequelize } = require('sequelize');
```

4. Para conectarse a la base de datos, se debe crear una instancia de Sequelize. Esto se hace pasando los parámetros de conexión por separado al constructor Sequelize.

```javascript
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

```

5. La información necesaria para conectarnos a la base de datos son las mismas credenciales que encontrábamos en Heroku con las que nos conectamos a pgAdmin. Para encontrarlas seguimos los siguientes pasos:

- Entramos a la [consola de Heroku](https://id.heroku.com/login) en nuestro navegador.
- Seleccionamos el proyecto **beduchop**
- Entramos a la pestaña de **Resources**
- Abrimos el add-on **Heroku Postgres**
- Abrimos la pestaña de **Settings**
- Y en la sección de **Database Credentials** damos click en el botón **View Credentials...**

Y de esta forma se despliegan las credenciales necesarias.

6. Definimos la conexión desde nuestra aplicación, en el archivo **app.js** con la instrucción.

```javascript
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

```

y la información de nuestro servidor que encontramos en Heroku con la correspondencia siguiente.

- En lugar de `database` ponemos el Database que encontramos en Heroku.
- En lugar de `username` ponemos el User que encontramos en Heroku.
- En lugar de `password` ponemos el Password que encontramos en Heroku.
- En lugar de `host` ponemos el Host que encontramos en Heroku.

El resto de las opciones se quedan igual.

7. El paso anterior define la conexión con la base de datos. Ahora podemos usar la función `.authenticate()` para verificar que la conexión sirva. Para esto agregamos el siguiente código al archivo **app.js**.

```javascript
try {
  sequelize.authenticate();
  console.log('La conexion fue exitosa');
} catch (error) {
  console.error('Hubo un problema con la conexión', error);
}
```

8. Ahora vamos a correr la aplicación, desde la terminal usamos el comando:

```bash
npm run dev
```

el resultado debe ser el siguiente:

<img src="img/img1.png">

[`Atrás: Sesión 03`](../README.md) | [`Siguiente: Reto-01`](../Reto-01)

