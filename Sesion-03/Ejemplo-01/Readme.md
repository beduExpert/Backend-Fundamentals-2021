[`Backend Fundamentals`](../../README.md) > [`Sesión 03: Sequelize`](../README.md) > `Ejemplo 1`

# Ejemplo 1: Introducción a Mongoose y Configuración del Entorno

**Objetivos**

---

### 1. **¿Qué es Mongoose?**
- **Concepto**: Mongoose es una biblioteca ODM (Object Data Modeling) que proporciona una forma estructurada y orientada a objetos de interactuar con MongoDB en aplicaciones Node.js.
- **Beneficios**: Validaciones integradas, middleware (hooks), esquemas definidos y manejo de relaciones entre documentos.

### 2. **Configuración del Entorno**

#### **Paso 1: Instalación de Node.js**
- **Instalar Node.js**: Descargar e instalar Node.js desde [https://nodejs.org/](https://nodejs.org/). Verificar la instalación ejecutando el siguiente comando en la terminal:
  ```bash
  node -v
  ```
  
#### **Paso 2: Crear un Proyecto Node.js**
1. Abrir la terminal y crear una nueva carpeta para el proyecto:
   ```bash
   mkdir mongoose-clase
   cd mongoose-clase
   ```

2. Inicializar un proyecto Node.js:
   ```bash
   npm init -y
   ```

#### **Paso 3: Instalar Mongoose y Express**
1. Instalar las dependencias:
   ```bash
   npm install mongoose express
   ```

2. Instalar nodemon (opcional, para reiniciar automáticamente la aplicación al hacer cambios):
   ```bash
   npm install --save-dev nodemon
   ```

#### **Paso 4: Conectar Mongoose a MongoDB Atlas**
1. **Crear un archivo `index.js`** en el proyecto:
   ```javascript
   const mongoose = require('mongoose');

   mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/miBaseDeDatos', {
     useNewUrlParser: true,
     useUnifiedTopology: true
   })
   .then(() => console.log('Conectado a MongoDB Atlas'))
   .catch((err) => console.error('Error al conectar a MongoDB Atlas', err));
   ```

2. Reemplazar `<username>`, `<password>` y `miBaseDeDatos` con la URI correcta de tu cluster en MongoDB Atlas.

3. Ejecutar el archivo:
   ```bash
   node index.js
   ```


[`Atrás: Ejemplo 01`](../README.md) | [`Siguiente: Reto 01`](../Reto-01)
