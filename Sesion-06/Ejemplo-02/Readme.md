[`Backend Fundamentals`](../../README.md) > [`Sesión 06`](../README.md) > `Ejemplo 2`

# Ejemplo 2: Validación de Entradas y Sanitización de Datos

## Objetivo

- Implementar validaciones robustas para prevenir ataques y asegurarse de que los datos ingresados por los usuarios sean correctos.

## Desarrollo

### 1. **¿Por qué es importante la validación?**
- La falta de validación de datos puede llevar a ataques como inyecciones de código o mal uso de la aplicación.
- Siempre hay que validar tanto en el **cliente** como en el **servidor**.

### 2. **Validaciones usando `express-validator`**
- **`express-validator`** es una librería que facilita la validación de entradas en Express.

### **Instalar y usar `express-validator`**:
1. Instalar la librería:
   ```bash
   npm install express-validator
   ```

2. Usar validadores en una ruta:
   ```javascript
   const { body, validationResult } = require('express-validator');

   app.post('/registro', [
     body('email').isEmail().withMessage('El email es inválido'),
     body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
   ], (req, res) => {
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
     }
     // Crear usuario si no hay errores
   });
   ```

### 3. **Sanitización de Datos**
- Evitar que los usuarios introduzcan código malicioso.
- **Sanitización con `express-validator`**:
   ```javascript
   body('email').normalizeEmail(),
   body('nombre').trim().escape()  // Quita espacios y caracteres peligrosos
   ```


[`Atrás`](../Ejemplo-01) | [`Siguiente`](../Reto-02)
