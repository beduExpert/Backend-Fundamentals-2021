[`Backend Fundamentals`](../../README.md) > [`Sesión 03`](../README.md) > `Postwork`

# Postwork

## 🎯 Objetivo

- Aplicar los conocimientos adquiridos en la sesión al proyecto personal
- Conectar la base de datos del proyecto personal con la aplicación.

## ⚙️ Setup
 - Un editor de texto (VsCode, Sublime, Atom,etc.)
- Node.Js
- npm
- Sequalize



## 🫀 Entregables

A lo largo del postwork podrás aplicar los conocimientos adquiridos durante el work a tu proyecto personal. 

Recapitulando un poco, en este momento ya se cuenta con un modelo del proyecto y una base de datos con la información que se usará en la construcción del mismo a lo largo del módulo. 

A continuación, construye la aplicación y conéctala con la base de datos. 

1. Genera un esqueleto del proyecto similar al que se utilizará para BeduShop. Debe verse así:

```
    Nombre del proyecto/
    ├── config/
    ├── models/
    ├── controllers/
    ├── routes/
    └── app.js
```
2. Instala dentro del proyecto todas las dependencias y paquetes necesarios para que funcione correctamente. Puedes consultar la actividad dos del prework de esta sesión para recordar cómo instalar cada una. La lista completa de dependencias se ve a continuación :
- Express
- Body-Parser
- Cors
- Nodemon
- Sequelize
- pg
- pg-hstore
- pg-native
3. Utilizando las credenciales de Heroku para la base de datos de tu proyecto, define en el archivo app.js la conexión de tu app con la base de datos. 

```jsx
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
4. Prueba la conexión con tu base haciendo las consultas que definiste en el postwork de la sesión 2 a través de sequelize.

