[`Backend Fundamentals`](../../README.md) > [`Sesión 05`](../README.md) > `Ejemplo 2`

# Ejemplo 2: Integración de Express con MongoDB y Mongoose

## Objetivo

 Aprender a integrar Express con MongoDB usando Mongoose, y construir una API RESTful que realice operaciones CRUD (Create, Read, Update, Delete) en una base de datos MongoDB.

## Desarrollo

- **Conexión entre MongoDB y Express**  
  Utilizamos Mongoose para conectar nuestra aplicación de Express a una base de datos MongoDB, facilitando la gestión de datos a través de modelos.

### 2. **Instalación de Mongoose**
1. En la carpeta del proyecto Express, instalar Mongoose:
   ```bash
   npm install mongoose
   ```

2. **Configurar la conexión con MongoDB en Express**:
   - Crear un archivo `config.js` o directamente en el archivo principal (`app.js`):
     ```javascript
     const mongoose = require('mongoose');

     // Conectar a la base de datos MongoDB (local o en la nube)
     mongoose.connect('mongodb://localhost:27017/miapp', {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     })
     .then(() => console.log('Conectado a MongoDB'))
     .catch(err => console.error('No se pudo conectar a MongoDB', err));
     ```

   **Nota**: Si se usa MongoDB Atlas, reemplazar la URL con la cadena de conexión de Atlas.

### 3. **Crear un Modelo en Mongoose**
- **Definir un esquema de datos**: Los esquemas son la base de los modelos en Mongoose y nos permiten estructurar los datos que se guardarán en MongoDB.

#### Ejemplo de esquema y modelo para "Producto":

1. Crear una carpeta llamada `models` y dentro un archivo `Producto.js`:
   ```javascript
   const mongoose = require('mongoose');

   // Definir un esquema de Mongoose
   const productoSchema = new mongoose.Schema({
     nombre: {
       type: String,
       required: true
     },
     precio: {
       type: Number,
       required: true
     },
     categoria: {
       type: String,
       required: true
     },
     enStock: {
       type: Boolean,
       default: true
     }
   });

   // Crear el modelo basado en el esquema
   const Producto = mongoose.model('Producto', productoSchema);

   module.exports = Producto;
   ```

- Este esquema define cómo se almacenarán los productos en la base de datos MongoDB, incluyendo el nombre, precio, categoría y si está en stock o no.


[`Atrás`](../Reto-02) | [`Siguiente`](../Ejemplo-03)
