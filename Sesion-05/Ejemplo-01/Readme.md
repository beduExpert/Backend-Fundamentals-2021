[`Backend Fundamentals`](../../README.md) > [`Sesión 05`](../README.md) > `Ejemplo 1`

# Ejemplo 1: Enrutamiento Avanzado y Manejo de Errores

## Objetivo

Aprender sobre enrutadores en Express para organizar rutas en módulos y manejar errores en la aplicación.

## Desarrollo

### 1. **Enrutadores en Express**
- **Definición**: Los enrutadores permiten organizar y modularizar rutas de una aplicación, especialmente en aplicaciones grandes.
- **Ventaja**: Facilita la creación de grupos de rutas relacionadas.

### **Ejemplo**:
1. Crear un enrutador para rutas relacionadas con usuarios.
2. Crear un archivo `routes/usuarios.js`:
   ```javascript
   const express = require('express');
   const router = express.Router();

   // Ruta para obtener un usuario
   router.get('/:id', (req, res) => {
     const id = req.params.id;
     res.send(`Detalles del usuario con ID: ${id}`);
   });

   // Exportar el enrutador
   module.exports = router;
   ```

3. Importar el enrutador en `app.js`:
   ```javascript
   const usuariosRouter = require('./routes/usuarios');
   app.use('/usuarios', usuariosRouter);
   ```

4. Ahora, la ruta `/usuarios/:id` manejará las solicitudes de usuarios.

### 2. **Manejo de Errores en Express**
- **Middleware de manejo de errores**: Express permite definir middleware específicos para manejar errores en toda la aplicación.

### **Ejemplo**:
1. Crear un middleware de manejo de errores al final del archivo `app.js`:
   ```javascript
   app.use((err, req, res, next) => {
     console.error(err.stack);
     res.status(500).send('Algo salió mal');
   });
   ```

2. Forzar un error con una ruta específica:
   ```javascript
   app.get('/error', (req, res) => {
     throw new Error('Forzando un error');
   });
   ```


[`Atrás`](../Reto-01) | [`Siguiente`](../Reto-02)
