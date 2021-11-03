[`Backend Fundamentals`](../../README.md) > [`Sesión 03: Sequelize`](../README.md) > `Ejemplo 3`

# Ejemplo 3: Consultas a la base de datos

**Objetivos**


**Requerimientos**

---


```javascript
Producto.findAll({
	limit: 10,
	where: {
		precio : {
			[Op.gte] : 350
		}
	}
})
.then(products =>
	console.log("All products:", JSON.stringify(products, null, 2))
)
```

[`Atrás: Ejemplo 01`](Ejemplo-01) | [`Siguiente: Reto 01`](../Reto-01)
