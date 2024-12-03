const express = require('express');
const sequelize = require('./config/db.config'); // Connexion à la DB
const cors = require('cors');
const commandeRoutes = require('./route/commandeRoutes'); // Chemin vers votre fichier de routes de commandes
const userRoutes = require('./route/userRoutes'); // Chemin vers votre fichier de routes de commandes
const catalogueRoutes = require('./route/catalogue.routes');

const insertInitialCommandes = require('./initBDD/initialCommandes'); // Importer la fonction pour insérer les commandes
const insertInitArticles = require('./initBDD/initialCatalogue');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.use('/commandes', commandeRoutes);
app.use('/user', userRoutes);
app.use('/catalogue', catalogueRoutes)


app.get('/', (req, res) => {
  res.send('API Site Deliver est opérationnelle !');
});

app.listen(port, async () => {
  try {
    await sequelize.sync();
    await insertInitialCommandes();
    await insertInitArticles();
    console.log(`Serveur Express démarré sur http://localhost:${port}`);
  } catch (error) {
    console.error('Erreur lors de la synchronisation des modèles avec la base de données:', error);
  }
});
