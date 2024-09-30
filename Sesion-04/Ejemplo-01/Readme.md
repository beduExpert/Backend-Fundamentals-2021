[`Backend Fundamentals`](../../README.md) > [`Sesión 04`](../README.md) > `Ejemplo 1`

# Ejemplo 1

## Objetivo

Entender los fundamentos de Express.js, cómo crear un servidor básico y configurar rutas iniciales.

---

## Desarrollo

### ¿Qué es una API REST?

Cuando se habla de REST API, significa utilizar una API para acceder a aplicaciones backend, de manera que esa comunicación se realice con los estandares definidos por el estilo de arquitectura REST.

REST es un acrónimo para **RE**presentational **S**tate **T**ransfer, fue pensada para sistemas dedicados a la distribución de *hypermedia*. En REST se siguen los siguientes principios:

- Arquitectura clientx/servidor sin estado, es decir, no se almacena la información de las solicitudes, cada solicitud es independiente.
- Una interfaz uniforme entre los elementos, para que la información se transfiera de forma estandarizada.
- Acciones concretas (POST, GET, PUT y DELETE) para la transferencia de datos.
- Uso de formatos de transferencia para la comunicación. Para este caso en específico utilizaremos JSON como el formato para enviar respuestas y recibir peticiones de objetos. Se puede usar también XLT ó HTML
- Un sistema en capas que organiza en jerarquías invisibles para lx clientx y cada uno de los servidores  que participan en la recuperación de la información solicitada.

Si bien parece una arquitectura muy restrictiva, esto sirve para que su uso sea mas sencillo. 

Es importante señalar que REST es un conjunto de normas que se pueden implementar a necesidad de la aplicación. 

## Definiendo nuestra API con ExpressJS

### 1. **¿Qué es Express.js?**
- **Definición**: Express.js es un framework web minimalista para Node.js que permite manejar rutas, middleware y servidores web de manera sencilla.
- **Características**:
  - Rutas sencillas y claras.
  - Soporte para middleware.
  - Extensible y flexible.

### 2. **Instalación de Express.js**
1. Crear un nuevo proyecto o usar un proyecto existente.
2. Instalar Express en el proyecto:
   ```bash
   npm install express
   ```

### 3. **Creación de un Servidor con Express**
1. Crear un archivo `app.js` con el siguiente código:
   ```javascript
   const express = require('express');
   const app = express();

   // Rutas básicas
   app.get('/', (req, res) => {
     res.send('¡Hola, mundo desde Express!');
   });

   // Iniciar el servidor
   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
     console.log(`Servidor escuchando en el puerto ${PORT}`);
   });
   ```

2. Ejecutar el servidor:
   ```bash
   node app.js
   ```
   Abrir el navegador y visitar `http://localhost:3000` para ver el mensaje "¡Hola, mundo desde Express!".

    
[`Atrás`](../README.md) | [`Siguiente`](../Reto-01)
