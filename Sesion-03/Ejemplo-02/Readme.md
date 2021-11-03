[`Backend Fundamentals`](../../README.md) > [`Sesión 03: Sequelize`](../README.md) > `Ejemplo 2`

# Ejemplo 2: Definición de Modelos

**Objetivos**


**Requerimientos**

---


```javascript
const Producto = sequelize.define('Producto', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.TEXT
  },
  precio: {
    type: DataTypes.REAL
  },
  cat: {
    type: DataTypes.TEXT
  },
  desc: {
    type: DataTypes.TEXT
  }
}, {
  freezeTableName: true,
  timestamps: false
});
```

[`Atrás: Ejemplo 01`](Ejemplo-01) | [`Siguiente: Reto 01`](../Reto-01)
