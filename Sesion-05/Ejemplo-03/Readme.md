[`Backend Fundamentals`](../../README.md) > [`Sesión 05`](../README.md) > `Ejemplo 3`

# Ejemplo 3: Crear Rutas para el CRUD en Express con Mongoose

## Objetivo

Ahora que tenemos nuestro modelo de Mongoose, crearemos las rutas para realizar operaciones CRUD (Create, Read, Update, Delete) sobre los productos.

## Desarrollo

#### **1. Crear un Producto (POST)**:
Añadir una ruta para crear nuevos productos en el archivo `app.js` o en un archivo de rutas separado:

```javascript
const Producto = require('./models/Producto'); // Importar el modelo

app.post('/productos', async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);  // Crear el producto con los datos del cuerpo de la solicitud
    const productoGuardado = await nuevoProducto.save();  // Guardar el producto en la base de datos
    res.status(201).send(productoGuardado);  // Responder con el producto creado
  } catch (error) {
    res.status(400).send(error);  // Manejar errores
  }
});
```

#### **2. Obtener todos los productos (GET)**:
Añadir una ruta para listar todos los productos:

```javascript
app.get('/productos', async (req, res) => {
  try {
    const productos = await Producto.find();  // Obtener todos los productos de la base de datos
    res.send(productos);  // Enviar la lista de productos como respuesta
  } catch (error) {
    res.status(500).send(error);  // Manejar errores
  }
});
```

#### **3. Obtener un producto por ID (GET)**:
Añadir una ruta para obtener un producto por su ID:

```javascript
app.get('/productos/:id', async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);  // Buscar producto por ID
    if (!producto) return res.status(404).send('Producto no encontrado');  // Si no existe, enviar error
    res.send(producto);  // Enviar el producto encontrado
  } catch (error) {
    res.status(500).send(error);  // Manejar errores
  }
});
```

#### **4. Actualizar un producto (PUT)**:
Añadir una ruta para actualizar productos:

```javascript
app.put('/productos/:id', async (req, res) => {
  try {
    const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });  // Actualizar producto por ID
    if (!productoActualizado) return res.status(404).send('Producto no encontrado');
    res.send(productoActualizado);  // Enviar el producto actualizado
  } catch (error) {
    res.status(400).send(error);  // Manejar errores
  }
});
```

#### **5. Eliminar un producto (DELETE)**:
Añadir una ruta para eliminar productos:

```javascript
app.delete('/productos/:id', async (req, res) => {
  try {
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id);  // Eliminar producto por ID
    if (!productoEliminado) return res.status(404).send('Producto no encontrado');
    res.send('Producto eliminado con éxito');  // Confirmar la eliminación
  } catch (error) {
    res.status(500).send(error);  // Manejar errores
  }
});
```

### 5. **Prueba y Validación**
- **Usar Postman o cURL**: Para probar las rutas de la API, se pueden utilizar herramientas como **Postman** o **cURL** para enviar solicitudes HTTP.
  
  **Ejemplo de solicitud POST con Postman**:
  - URL: `http://localhost:3000/productos`
  - Método: POST
  - Cuerpo (JSON):
    ```json
    {
      "nombre": "Producto 1",
      "precio": 150,
      "categoria": "Electrónica",
      "enStock": true
    }
    ```
  
- **Validación de respuestas**: Probar todas las rutas del CRUD (GET, POST, PUT, DELETE) y verificar que los datos se guardan, actualizan y eliminan correctamente en MongoDB.


[`Atrás`](../Reto-02)
