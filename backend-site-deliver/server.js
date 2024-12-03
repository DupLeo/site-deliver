const express = require('express');
const sequelize = require('./config/db.config'); // Connexion à la DB
const cors = require('cors');
const commandeRoutes = require('./route/commandeRoutes'); // Chemin vers votre fichier de routes de commandes
const userRoutes = require('./route/userRoutes'); // Chemin vers votre fichier de routes de commandes

const insertInitialCommandes = require('./initialCommandes'); // Importer la fonction pour insérer les commandes

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.use('/commandes', commandeRoutes);
app.use('/user', userRoutes);


app.get('/', (req, res) => {
  res.send('API Site Deliver est opérationnelle !');
});

app.listen(port, async () => {
  try {
    await sequelize.sync();
    await insertInitialCommandes();
    console.log(`Serveur Express démarré sur http://localhost:${port}`);
  } catch (error) {
    console.error('Erreur lors de la synchronisation des modèles avec la base de données:', error);
  }
});
