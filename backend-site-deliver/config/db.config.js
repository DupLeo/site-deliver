require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  logging: false,  // désactiver les logs SQL dans la console
});

// Vérification de la connexion
sequelize.authenticate()
  .then(() => {
    console.log('Connexion réussie à la base de données MySQL avec Sequelize !');
  })
  .catch(err => {
    console.error('Erreur de connexion à la base de données :', err);
  });

module.exports = sequelize;
