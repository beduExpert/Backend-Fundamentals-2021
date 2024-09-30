[`Backend Fundamentals`](../../README.md) > [`Sesión 01`](../README.md) > `Ejemplo 2`

# Ejemplo 2: Módulos en Node.js

**Objetivo:**

Comprender cómo funcionan los módulos en Node.js, tanto los módulos internos como la creación de módulos personalizados.

---

## Desarrollo

### 1. **¿Qué son los Módulos en Node.js?**
- **Concepto**: Un módulo es una pieza de código encapsulada en un archivo. En Node.js, cada archivo es un módulo.
- **Tipos de Módulos**:
  - **Módulos internos**: Proporcionados por Node.js (ej. `fs`, `http`).
  - **Módulos externos**: Paquetes instalados vía NPM.
  - **Módulos personalizados**: Creación de tus propios módulos.

### 2. **Uso de Módulos Internos (Built-in)**

#### **Ejemplo 1: Usar el módulo `os`**
1. En tu archivo `index.js`, agrega el siguiente código:
   ```javascript
   const os = require('os');

   console.log('Sistema operativo:', os.platform());
   console.log('Memoria libre:', os.freemem());
   console.log('Arquitectura:', os.arch());
   ```

2. Ejecuta el archivo:
   ```bash
   node index.js
   ```

#### **Ejemplo 2: Usar el módulo `fs` (Sistema de archivos)**
1. Leer un archivo usando el módulo `fs`:
   ```javascript
   const fs = require('fs');

   fs.readFile('index.js', 'utf8', (err, data) => {
     if (err) {
       console.error('Error al leer el archivo:', err);
       return;
     }
     console.log('Contenido del archivo:\n', data);
   });
   ```

### 3. **Creación de Módulos Personalizados**
1. Crear un archivo `math.js` con el siguiente código:
   ```javascript
   function sumar(a, b) {
     return a + b;
   }

   function restar(a, b) {
     return a - b;
   }

   module.exports = { sumar, restar };
   ```

2. En el archivo `index.js`, importar y usar el módulo `math.js`:
   ```javascript
   const math = require('./math');

   console.log('Suma:', math.sumar(2, 3));
   console.log('Resta:', math.restar(5, 2));
   ```

-------

[`Atrás: Reto 01`](../Reto-01) | [`Siguiente: Sesión`](../README.md)

