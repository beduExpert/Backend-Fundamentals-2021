const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelize = require('../config/db')
const crypto = require('crypto');
const jwt = require('jsonwebtoken'); 
const secret = require('../config').secret;  

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    validate:{
        isLowercase: true,
        is: /^[a-zA-Z0-9]+$/
    }
  },
  nombre: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    validate: {
        isEmail: true,
    }
  },
  salt: {
    type: DataTypes.TEXT
  },
  hash: {
    type: DataTypes.TEXT
  },
  direccion: {
    type: DataTypes.TEXT
  },
  tarjeta: {
    type: DataTypes.TEXT,
    validate:{
        len: 16,
    }
  },
  tipo: {
    type: DataTypes.TEXT,
    validate:{
        isIn: [['Comprador', 'Vendedor']]
    }
  }
}, {
  freezeTableName: false,
  timestamps: false
});

User.crearPassword = function (password) {
    salt = crypto.randomBytes(16).toString("hex"); // generando una "salt" random para cada usuario
    hash = crypto
    .pbkdf2Sync(password, salt, 10000, 512, "sha512")
    .toString("hex"); // generando un hash utilizando la salt
    return { salt : salt, hash: hash }
}

User.validarPassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  return this.hash === hash;
}

User.generarJWT = function(user) {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60); // 60 días antes de expirar

  return jwt.sign({
    id: user._id,
    username: user.username,
    exp: parseInt(exp.getTime() / 1000),
  }, secret);
}

User.toAuthJSON = function(user){
    return {
        username: user.username,
        email: user.email,
        token: User.generarJWT(user)
    };
}

module.exports = User;