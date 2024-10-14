[`Backend Fundamentals`](../../README.md) > [`Sesión 06`](../README.md) > `Ejemplo 3`

# Ejemplo 3: Validación de Datos con MongoDB y Mongoose

## Objetivo

Aprender a implementar validaciones robustas en los esquemas de Mongoose para asegurar que los datos almacenados en MongoDB cumplan con los requisitos de la aplicación.

## Desarrollo

### 1. **¿Por qué es importante la validación en MongoDB?**
- Garantizar la integridad de los datos almacenados en la base de datos.
- Prevenir que datos mal formateados o inválidos sean aceptados por el sistema, lo que puede llevar a errores y vulnerabilidades.
  
Mongoose facilita la validación de datos directamente a través de sus esquemas, proporcionando una forma estructurada de definir reglas para los documentos antes de ser guardados en la base de datos.

---

### 2. **Validaciones incorporadas en Mongoose**

Cuando definimos un esquema en Mongoose, podemos aplicar una variedad de validaciones básicas directamente en las propiedades de los documentos. A continuación, se muestran algunos ejemplos comunes de validaciones nativas.

#### **Ejemplo de esquema con validaciones incorporadas**:

```javascript
const mongoose = require('mongoose');

// Definir un esquema de Producto con validaciones
const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre del producto es obligatorio'],  // Campo obligatorio
    minlength: [3, 'El nombre debe tener al menos 3 caracteres'],  // Longitud mínima
    maxlength: [50, 'El nombre no debe exceder los 50 caracteres']  // Longitud máxima
  },
  precio: {
    type: Number,
    required: [true, 'El precio es obligatorio'],  // Campo obligatorio
    min: [0, 'El precio no puede ser negativo'],  // Valor mínimo
    max: [10000, 'El precio no puede superar los 10,000']  // Valor máximo
  },
  categoria: {
    type: String,
    enum: ['Electrónica', 'Ropa', 'Alimentos'],  // Solo acepta ciertos valores
    required: [true, 'La categoría es obligatoria']
  },
  enStock: {
    type: Boolean,
    default: true  // Valor por defecto
  },
  fechaCreacion: {
    type: Date,
    default: Date.now  // Valor por defecto al crear un nuevo producto
  }
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
```

#### **Validaciones disponibles**:
1. **`required`**: Hace que un campo sea obligatorio. Si no se proporciona, lanzará un error.
2. **`min` y `max`**: Para números, limita el valor mínimo y máximo permitido.
3. **`minlength` y `maxlength`**: Define la longitud mínima y máxima de un string.
4. **`enum`**: Restringe los valores posibles a una lista predefinida.
5. **`default`**: Define un valor por defecto si no se proporciona uno.

---

### 3. **Validaciones personalizadas**

Mongoose también permite crear validaciones personalizadas si las validaciones predeterminadas no son suficientes para tus necesidades.

#### **Ejemplo de validación personalizada**:

En este ejemplo, validaremos que el nombre de un producto no contenga caracteres numéricos.

```javascript
const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    validate: {
      validator: function(v) {
        return !/\d/.test(v);  // Verifica que no haya números en el nombre
      },
      message: props => `${props.value} no debe contener números`
    }
  },
  precio: {
    type: Number,
    required: [true, 'El precio es obligatorio'],
    min: [0, 'El precio no puede ser negativo']
  }
});
```

Aquí, `validate` toma un objeto que contiene una función `validator`. Esta función debe devolver `true` o `false`, indicando si el valor es válido o no. También puedes personalizar el mensaje de error usando `message`.

### 4. **Mensajes de error personalizados**

Mongoose permite personalizar los mensajes de error para hacerlos más comprensibles y específicos cuando una validación falla.

#### **Ejemplo de mensajes de error personalizados**:

```javascript
const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre del producto es obligatorio'],
    minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
    maxlength: [50, 'El nombre no debe exceder los 50 caracteres']
  },
  precio: {
    type: Number,
    required: [true, 'El precio es obligatorio'],
    min: [0, 'El precio debe ser mayor o igual a 0']
  }
});
```

En este ejemplo, si la validación falla, el mensaje de error será claro y específico sobre el problema que tiene el campo.

[`Atrás`](../README.md) | [`Siguiente`](../Ejemplo-04)
