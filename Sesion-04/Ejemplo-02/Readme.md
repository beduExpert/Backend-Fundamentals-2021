[`Backend Fundamentals`](../../README.md) > [`Sesión 04`](../README.md) > `Ejemplo 2`

# Ejemplo 2: Manejo de Rutas y Parámetros en Express

## Objetivo:

 Aprender a manejar rutas dinámicas y estáticas, así como capturar parámetros de las URLs.

---

## Desarrollo

### **Temas**:

### 1. **Rutas Dinámicas**
- **Rutas básicas**: Definir rutas específicas para cada URL.
- **Rutas con parámetros**: Capturar datos dinámicos desde la URL.

### **Ejemplo**:
1. Agregar rutas con parámetros en `app.js`:
   ```javascript
   // Ruta estática
   app.get('/contacto', (req, res) => {
     res.send('Esta es la página de contacto');
   });

   // Ruta dinámica
   app.get('/usuario/:nombre', (req, res) => {
     const nombreUsuario = req.params.nombre;
     res.send(`Hola, ${nombreUsuario}`);
   });
   ```

### 2. **Rutas con Query Parameters**
- **Uso de query parameters**: Capturar datos adicionales desde la URL mediante el objeto `req.query`.

### **Ejemplo**:
1. Modificar `app.js` para capturar parámetros de consulta:
   ```javascript
   app.get('/buscar', (req, res) => {
     const query = req.query.q;
     res.send(`Resultados de búsqueda para: ${query}`);
   });
   ```

2. Visitar `http://localhost:3000/buscar?q=express` para ver cómo capturamos la consulta "express".

---
 
[`Atrás`](../Reto-01) | [`Siguiente`](../Reto-02)
