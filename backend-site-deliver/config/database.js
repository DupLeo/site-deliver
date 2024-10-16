const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('site-deliver-bdd', 'root', '1234', {
    host: '127.0.0.1',
    dialect: 'mysql',
});

module.exports = sequelize;
