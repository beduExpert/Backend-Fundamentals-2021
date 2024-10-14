[`Backend Fundamentals`](../../README.md) > [`Sesión 06`](../README.md) > `Ejemplo 4`

# Ejemplo 4: Protección Contra Ataques Comunes (XSS, CSRF, SQL Injection)

## Objetivo

 Implementar técnicas para proteger la aplicación contra ataques comunes, como **Cross-Site Scripting (XSS)**, **Cross-Site Request Forgery (CSRF)** y **SQL Injection**.

## Desarrollo

### 1. **Cross-Site Scripting (XSS)**
- **¿Qué es XSS?**: Un ataque en el que los atacantes inyectan scripts maliciosos en sitios web visitados por otros usuarios.
- **Prevención**:
  - **Escapar los datos de salida**: Nunca mostrar datos del usuario directamente sin sanitizarlos.
  - Usar librerías como `helmet` para establecer cabeceras de seguridad.

### **Implementar `helmet`**:
1. Instalar `helmet`:
   ```bash
   npm install helmet
   ```

2. Usarlo en la aplicación:
   ```javascript
   const helmet = require('helmet');
   app.use(helmet());  // Añade varias protecciones, incluyendo XSS
   ```

### 2. **Cross-Site Request Forgery (CSRF)**
- **¿Qué es CSRF?**: Un ataque en el que los usuarios maliciosos engañan a los navegadores de otros usuarios para que realicen acciones no autorizadas.
  
- **Implementación de CSRF Token**:
  - Usar la librería `csurf` para proteger rutas POST, PUT y DELETE.

### **Instalar y usar `csurf`**:
1. Instalar la librería:
   ```bash
   npm install csurf
   ```

2. Añadir el middleware:
   ```javascript
   const csrf = require('csurf');
   const csrfProtection = csrf({ cookie: true });
   app.use(csrfProtection);
   ```

3. Añadir el token CSRF en las solicitudes:
   ```html
   <input type="hidden" name="_csrf" value="<%= csrfToken %>">
   ```

### 3. **SQL Injection**
- **¿Qué es SQL Injection?**: Un ataque donde el atacante puede inyectar consultas SQL maliciosas.
- **Prevención**:
  - Usar **consultas preparadas** con **Mongoose** (o cualquier ORM) para evitar la manipulación de las consultas.



[`Atrás`](../README.md) 
