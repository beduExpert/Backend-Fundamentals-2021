[`Backend Fundamentals`](../../README.md) > [`Sesi贸n 03`](../README.md) > `Postwork`

# Postwork

## 馃幆 Objetivo

- Aplicar los conocimientos adquiridos en la sesi贸n al proyecto personal
- Conectar la base de datos del proyecto personal con la aplicaci贸n.

## 鈿欙笍 Setup
 - Un editor de texto (VsCode, Sublime, Atom,etc.)
- Node.Js
- npm
- Sequalize



## 馃珋 Entregables

A lo largo del postwork podr谩s aplicar los conocimientos adquiridos durante el work a tu proyecto personal. 

Recapitulando un poco, en este momento ya se cuenta con un modelo del proyecto y una base de datos con la informaci贸n que se usar谩 en la construcci贸n del mismo a lo largo del m贸dulo. 

A continuaci贸n, construye la aplicaci贸n y con茅ctala con la base de datos. 

1. Genera un esqueleto del proyecto similar al que se utilizar谩 para BeduShop. Debe verse as铆:

```
    Nombre del proyecto/
    鈹溾攢鈹? config/
    鈹溾攢鈹? models/
    鈹溾攢鈹? controllers/
    鈹溾攢鈹? routes/
    鈹斺攢鈹? app.js
```
2. Instala dentro del proyecto todas las dependencias y paquetes necesarios para que funcione correctamente. Puedes consultar la actividad dos del prework de esta sesi贸n para recordar c贸mo instalar cada una. La lista completa de dependencias se ve a continuaci贸n :
- Express
- Body-Parser
- Cors
- Nodemon
- Sequelize
- pg
- pg-hstore
- pg-native
3. Utilizando las credenciales de Heroku para la base de datos de tu proyecto, define en el archivo app.js la conexi贸n de tu app con la base de datos. 

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
4. Prueba la conexi贸n con tu base haciendo las consultas que definiste en el postwork de la sesi贸n 2 a trav茅s de sequelize.

