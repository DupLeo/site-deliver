const express = require('express');
const router = express.Router();
const commandeController = require('../src/commande/commandeController');

// Route pour créer une commande
router.route('/create').post(commandeController.createCommande);
router.route('/all').get(commandeController.getAllCommandes);


module.exports = router;
