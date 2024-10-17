const express = require('express');
const sequelize = require('./config/db.config');  // Importe la connexion Sequelize
var userRoutes = require('./route/routes'); // Assure-toi que le chemin est correct

const app = express();
const port = 3000;

// Middleware pour parser les JSON
app.use(express.json());
app.use('/user', userRoutes); 

// Route basique pour vérifier si le serveur fonctionne
app.get('/', (req, res) => {
  res.send('API Site Deliver est opérationnelle !');
});

// Démarre le serveur
app.listen(port, async () => {
  try {
    // Synchronise les modèles avec la base de données
    await sequelize.sync();
    console.log(`Serveur Express démarré sur http://localhost:${port}`);
  } catch (error) {
    console.error('Erreur lors de la synchronisation des modèles avec la base de données:', error);
  }
});
