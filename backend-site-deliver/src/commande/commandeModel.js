const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db.config'); // Assurez-vous que ce chemin est correct

const Commande = sequelize.define('Commande', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    site: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    etapesHistorique: {
        type: DataTypes.JSON, // Utilisation de JSONB pour stocker des objets JSON
        allowNull: false,
    },
}, {
    // options
    tableName: 'commandes', // Nom de la table dans la DB
});

// Synchroniser le modèle avec la base de données
Commande.sync();

module.exports = Commande;
