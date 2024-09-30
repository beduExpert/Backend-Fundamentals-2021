[`Backend Fundamentals`](../../README.md) > [`Sesión 03: Sequelize`](../README.md) > `Ejemplo 3`

# Ejemplo 3: Operaciones CRUD con Mongoose

**Objetivos**

 Realizar operaciones CRUD usando Mongoose para interactuar con MongoDB

---


### 1. **Crear (Create)**:
- Guardar un nuevo documento utilizando `.save()` o `.create()`.

### **Ejemplo**:
- Crear un nuevo producto:
  ```javascript
  const Producto = mongoose.model('Producto', productoSchema);

  Producto.create({
    nombre: 'Tablet',
    precio: 300,
    stock: 10,
    categoria: 'Electrónica'
  })
  .then(() => console.log('Producto creado'))
  .catch(err => console.error(err));
  ```

### 2. **Leer (Read)**:
- **Métodos de lectura**: `.find()`, `.findOne()`, y `.findById()`.

### **Ejemplo**:
- Leer productos con un precio mayor a 500:
  ```javascript
  Producto.find({ precio: { $gt: 500 } })
    .then(productos => console.log(productos))
    .catch(err => console.error(err));
  ```

### 3. **Actualizar (Update)**:
- **Métodos de actualización**: `.updateOne()`, `.updateMany()`, `.findByIdAndUpdate()`.

### **Ejemplo**:
- Actualizar el stock de un producto:
  ```javascript
  Producto.findByIdAndUpdate('ID_DEL_PRODUCTO', { stock: 15 }, { new: true })
    .then(producto => console.log('Producto actualizado', producto))
    .catch(err => console.error(err));
  ```

### 4. **Eliminar (Delete)**:
- **Métodos de eliminación**: `.deleteOne()`, `.deleteMany()`, `.findByIdAndDelete()`.

### **Ejemplo**:
- Eliminar un producto por su ID:
  ```javascript
  Producto.findByIdAndDelete('ID_DEL_PRODUCTO')
    .then(() => console.log('Producto eliminado'))
    .catch(err => console.error(err));
  ```


[`Atrás: Ejemplo 02`](../Ejemplo-02) | [`Siguiente: Reto 03`](../Reto-03)
