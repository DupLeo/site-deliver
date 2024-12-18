const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db.config');

const User = sequelize.define('User', {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    poste: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ville: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    // options
    tableName: 'users', // Nom de la table dans la DB
});

// Synchroniser le modèle avec la base de données
User.sync();

module.exports = User;
