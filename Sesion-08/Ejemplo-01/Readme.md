[`Backend Fundamentals`](../../README.md) > [`Sesión 08`](../Readme.md) > `Ejemplo 1`

# Ejemplo 1: Diseño de Microservicios con Node.js y MongoDB

## Objetivo

Desarrollar microservicios independientes con Node.js y MongoDB, definiendo responsabilidades específicas para cada servicio.

## Desarrollo

1. **Estructura de un microservicio**:
   - Cada microservicio debe tener su propia lógica de negocio, base de datos, y entorno de desarrollo. 
   - Un ejemplo común sería un servicio de autenticación, un servicio de usuarios, y un servicio de inventario.

2. **Uso de MongoDB en un entorno distribuido**:
   - Ventajas de MongoDB como base de datos NoSQL distribuida.
   - Cómo cada microservicio puede tener su propia base de datos o colección en MongoDB para mejorar el aislamiento y la escalabilidad.

3. **Desarrollo de un microservicio básico en Node.js**:
   - Crear un servicio de **usuarios** que gestione las operaciones de registro y autenticación.
   
   **Ejemplo de código** (Servicio de Usuarios):
   ```javascript
   const express = require('express');
   const mongoose = require('mongoose');
   const User = require('./models/User'); // Modelo de MongoDB

   const app = express();
   app.use(express.json());

   // Conectar a MongoDB
   mongoose.connect('mongodb://localhost:27017/usuarios', {
     useNewUrlParser: true, useUnifiedTopology: true
   });

   // Ruta de registro de usuario
   app.post('/register', async (req, res) => {
     try {
       const user = new User(req.body);
       await user.save();
       res.status(201).send({ user });
     } catch (err) {
       res.status(400).send(err);
     }
   });

   app.listen(3001, () => {
     console.log('Servicio de Usuarios corriendo en el puerto 3001');
   });
   ```

4. **Separación de servicios**:
   - Crear un servicio independiente para manejar productos o inventarios.
   - Uso de MongoDB en este servicio para almacenar información específica (como el inventario de productos).


[`Atrás`](../Readme.md) | [`Siguiente`](../Reto-01)
