[`Backend Fundamentals`](../../README.md) > [`Sesión 07`](../README.md) > `Ejemplo 3`

# Ejemplo 1: Protección de Endpoints y Autorización Basada en Roles

## Objetivo

Aprender a implementar autorización basada en roles, permitiendo que solo ciertos usuarios puedan acceder a recursos o ejecutar ciertas acciones.


## Desarrollo

### 1. **Autorización basada en roles**:
- **Roles comunes**: Admin, Usuario Regular, Invitado.
- **Control de acceso**: Limitar el acceso a rutas y acciones específicas según el rol del usuario.

### 2. **Implementación de roles en JWT**:
- Al generar el token JWT, incluye información del rol del usuario:

#### **Generar token con roles**:
```javascript
const token = jwt.sign({ username: 'usuario', role: 'admin' }, 'miSecreto', { expiresIn: '1h' });
```

#### **Proteger rutas según roles**:
```javascript
const verificarAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).send('Acceso denegado');
  next();
};

app.get('/admin', passport.authenticate('jwt', { session: false }), verificarAdmin, (req, res) => {
  res.send('Acceso autorizado para administradores');
});
```

[`Atrás`](../Reto-02) | [`Siguiente`](../Reto-03)
