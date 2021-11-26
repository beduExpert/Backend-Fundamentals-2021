const { Sequelize, DataTypes, Op } = require('sequelize');

const sequelize = new Sequelize(
  '',
  '', 
  '',
{
  host: '',
  dialect: 'postgres',
  native: true,
  ssl: true
});

module.exports = sequelize