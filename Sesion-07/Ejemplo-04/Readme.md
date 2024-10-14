[`Backend Fundamentals`](../../README.md) > [`Sesión 07`](../README.md) > `Ejemplo 4`

# Ejemplo 4: Mejores Prácticas de Seguridad y Manejo de Errores

## Objetivo

Implementar mejores prácticas de seguridad y manejo de errores en la autenticación y autorización.

## Desarrollo

### 1. **Mejores prácticas de seguridad**:
- **Uso de HTTPS**: En producción, siempre utilizar HTTPS para evitar que los tokens sean interceptados.
- **Expiración de Tokens**: Siempre establecer un tiempo de expiración para los tokens JWT (por ejemplo, 1 hora).
- **Revocación de Tokens**: En caso de sesión cerrada o compromisos de seguridad, revocar tokens mediante listas negras.
- **Almacenamiento seguro de tokens en el cliente**:
  - Los tokens JWT deben almacenarse de manera segura en el **LocalStorage** o **SessionStorage**, y no en cookies sin medidas de seguridad.
  
### 2. **Manejo de errores y respuestas seguras**:
- **No exponer demasiada información** en mensajes de error para evitar que los atacantes adquieran información sensible.
- **Middleware de manejo de errores**: Crear un middleware global que capture todos los errores y devuelva respuestas apropiadas sin exponer detalles sensibles.

#### **Ejemplo de manejo de errores**:
```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res

.status(500).send('Algo salió mal, estamos trabajando en ello.');
});
```

[`Atrás`](../Reto-03) 
