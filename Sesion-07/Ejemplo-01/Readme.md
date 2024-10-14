[`Backend Fundamentals`](../../README.md) > [`Sesión 07`](../README.md) > `Ejemplo 1`

# Ejemplo 1: Autenticación con JSON Web Tokens (JWT)

## Objetivo

Aprender a implementar autenticación basada en tokens JWT, incluyendo cómo generar, verificar y proteger los tokens.

## Desarrollo

### 1. **¿Qué es JWT?**
- **JSON Web Token (JWT)** es un estándar para crear tokens compactos y seguros que se pueden usar para autenticar solicitudes entre el cliente y el servidor. Un token JWT contiene tres partes:
  1. **Header**: Indica el tipo de token y el algoritmo de cifrado.
  2. **Payload**: Contiene los datos del usuario o las declaraciones.
  3. **Signature**: La parte que garantiza la integridad del token y asegura que no haya sido modificado.

### 2. **Flujo de autenticación con JWT**:
1. El usuario envía su credenciales (usuario/contraseña).
2. El servidor valida las credenciales y genera un **token JWT**.
3. El cliente almacena el token y lo envía con cada solicitud en las cabeceras HTTP.
4. El servidor valida el token antes de permitir el acceso al recurso.

### 3. **Implementación de JWT en Express**

#### **Instalar `jsonwebtoken`**:
```bash
npm install jsonwebtoken
```

#### **Crear un token JWT en el login**:
```javascript
const jwt = require('jsonwebtoken');

// Ruta para login y generación de token
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Validar las credenciales (simplificado)
  if (username === 'usuario' && password === '1234') {
    // Generar el token JWT con un tiempo de expiración de 1 hora
    const token = jwt.sign({ username }, 'miSecreto', { expiresIn: '1h' });
    return res.json({ token });
  }
  
  return res.status(400).send('Credenciales incorrectas');
});
```

#### **Verificar el token JWT en rutas protegidas**:
```javascript
const verificarToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Acceso denegado. No se proporcionó un token.');

  try {
    const verified = jwt.verify(token, 'miSecreto');
    req.user = verified;
    next();  // Procede a la siguiente función middleware
  } catch (error) {
    res.status(400).send('Token no válido');
  }
};

// Ejemplo de una ruta protegida
app.get('/datos-protegidos', verificarToken, (req, res) => {
  res.send('Acceso autorizado a datos sensibles');
});
```


[`Siguiente`](../Reto-01)
