[`Backend Fundamentals`](../../README.md) > [`Sesión 03: Sequelize`](../README.md) > `Ejemplo 1`

# Ejemplo 1: Configuración de Sequelize

**Objetivos**


**Requerimientos**

---

```javascript
const { Sequelize } = require('sequelize');
```

```javascript
const sequelize = new Sequelize(
  'database',
  'username', 
  'password',
{
  host: 'host',
  dialect: 'postgres',
  native: true,
  ssl: true
});

```

```javascript
try {
  sequelize.authenticate();
  console.log('La conexion fue exitosa');
} catch (error) {
  console.error('hubo un problema con la conexión', error);
}
```

[`Atrás: Sesión 03`](../README.md) | [`Siguiente: Reto-01`](../Reto-01)

