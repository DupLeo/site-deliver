const express = require('express');
const router = express.Router();
const commandeController = require('../src/commande/commandeController');

router.route('/create').post(commandeController.createCommande);
router.route('/addStep').post(commandeController.createCommande);
router.route('/all').get(commandeController.getAllCommandes);
router.route('/:id/steps').put(commandeController.updateStep);


module.exports = router;
