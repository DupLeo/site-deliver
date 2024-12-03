const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db.config'); // Assurez-vous que ce chemin est correct

const Catalogue = sequelize.define('Catalogue', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'catalogue',
});

module.exports = Catalogue;
