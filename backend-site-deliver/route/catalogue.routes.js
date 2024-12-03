const express = require('express');
const router = express.Router();
const catalogueController = require('../src/catalogue/catalogueController');

// Route pour récupérer tout les articles
router.route('/all').get(catalogueController.getAllCatalogue);
router.route('/insertArticle').post(catalogueController.createArticle);
// exemple : /getAnArticle?id=123
router.route('/getAnArticle').get(catalogueController.getAnArticleFromCatalogue);

module.exports = router;
