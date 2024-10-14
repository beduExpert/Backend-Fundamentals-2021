[`Backend Fundamentals`](../../README.md) > [`Sesión 07`](../README.md) > `Ejemplo 4`

# Ejemplo 2:  Implementación de Passport.js con JWT

## Objetivo

Aprender a usar **Passport.js** con la estrategia **JWT** para gestionar la autenticación de usuarios en una aplicación Express.

## Desarrollo

### 1. **¿Qué es Passport.js?**
- **Passport.js** es un middleware de autenticación flexible que soporta múltiples estrategias de autenticación como JWT, OAuth, Google, Facebook, etc.
  
### 2. **Instalación de Passport.js y Estrategia JWT**:
```bash
npm install passport passport-jwt
```

### 3. **Configuración de Passport con JWT**:

#### **Definir la estrategia JWT**:
```javascript
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'miSecreto'
};

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
  // Aquí podrías buscar al usuario en la base de datos usando jwt_payload
  if (jwt_payload.username === 'usuario') {
    return done(null, jwt_payload);
  } else {
    return done(null, false);
  }
}));

app.use(passport.initialize());
```

#### **Proteger rutas con Passport y JWT**:
```javascript
app.get('/ruta-protegida', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.send('Acceso autorizado con Passport y JWT');
});
```


[`Atrás`](../Reto-01) | [`Siguiente`](../Reto-02)
