const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');

const Product = sequelize.define('Product', {
 name: {
    type: DataTypes.STRING,
    allowNull: false,
 },
 code: {
    type: DataTypes.STRING,
    allowNull: false,
 },
 description: {
    type: DataTypes.STRING,
    allowNull: false,
 },
 price: {
    type: DataTypes.FLOAT,
    allowNull: false,
 },
});

module.exports = { sequelize, Product };
