const { Sequelize, DataTypes, Op } = require('sequelize');



try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

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

// Producto.sync()

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

