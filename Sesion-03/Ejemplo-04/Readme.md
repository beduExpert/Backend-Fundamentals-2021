[`Backend Fundamentals`](../../README.md) > [`Sesión 03: Sequelize`](../README.md) > `Ejemplo 4`

# Ejemplo 4:  Relaciones entre Documentos y Consultas Avanzadas

**Objetivos**

Aprender a modelar relaciones entre documentos usando referencias (populate) y realizar consultas avanzadas.

---

### 1. **Relaciones entre Documentos**:

#### **Referencias entre modelos**:
- **Uso de `ref`**: Permite relacionar documentos de diferentes colecciones.

### **Ejemplo**:
1. Definir un modelo `Usuario` y un modelo `Pedido`:
   ```javascript
   const usuarioSchema = new mongoose.Schema({
     nombre: String,
     email: String
   });

   const pedidoSchema = new mongoose.Schema({
     producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto' },
     usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
     fechaPedido: { type: Date, default: Date.now }
   });

   const Usuario = mongoose.model('Usuario', usuarioSchema);
   const Pedido = mongoose.model('Pedido', pedidoSchema);
   ```

2. **Crear y relacionar documentos**:
   - Crear un pedido con referencia a un usuario y un producto.
   ```javascript
   const nuevoPedido = new Pedido({
     producto: 'ID_DEL_PRODUCTO',
     usuario: 'ID_DEL_USUARIO'
   });

   nuevoPedido.save()
     .

then(() => console.log('Pedido guardado'))
     .catch(err => console.error(err));
   ```

3. **Uso de `.populate()`** para obtener la información relacionada:
   ```javascript
   Pedido.find().populate('producto').populate('usuario')
     .then(pedidos => console.log(pedidos))
     .catch(err => console.error(err));
   ```


[`Atrás: Ejemplo 01`](Ejemplo-01) | [`Siguiente: Reto 01`](../Reto-01)
