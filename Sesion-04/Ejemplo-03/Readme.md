[`Backend Fundamentals`](../../README.md) > [`Sesión 04`](../README.md) > `Ejemplo 3`

# Ejemplo 3: Middleware en Express

## Objetivo

Comprender el concepto de middleware en Express y cómo utilizarlo para manipular las solicitudes y respuestas.

---

## Desarrollo


### 1. **¿Qué es el Middleware?**
- **Definición**: Un middleware es una función que se ejecuta durante el ciclo de una solicitud y tiene acceso al objeto `req` (solicitud), `res` (respuesta), y `next()` para pasar el control al siguiente middleware.
- **Tipos de middleware**:
  - **Globales**: Se ejecutan para todas las rutas.
  - **Específicos de ruta**: Se ejecutan solo para ciertas rutas.

### 2. **Middleware Global**
- Usar `app.use()` para aplicar middleware a todas las rutas.

### **Ejemplo**:
1. Añadir un middleware global para registrar todas las solicitudes:
   ```javascript
   app.use((req, res, next) => {
     console.log(`Nueva solicitud: ${req.method} ${req.url}`);
     next();
   });
   ```

### 3. **Middleware para Manejo de Archivos Estáticos**
- Servir archivos como CSS, imágenes o JavaScript desde una carpeta pública.

### **Ejemplo**:
1. Servir archivos estáticos desde una carpeta `public`:
   ```javascript
   app.use(express.static('public'));
   ```

2. Crear la carpeta `public` y colocar un archivo `index.html` dentro.

### 4. **Middleware para Procesar Datos (Body Parsing)**
- Usar middleware para procesar datos enviados en el cuerpo de las solicitudes (por ejemplo, datos de formularios o JSON).

### **Ejemplo**:
1. Instalar el middleware `body-parser` o usar el middleware incorporado de Express para datos en formato JSON:
   ```javascript
   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));
   ```

 
[`Atrás`](../Reto-02) | [`Siguiente`](../Reto-03)
