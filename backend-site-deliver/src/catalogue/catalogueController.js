const Catalogue = require('../catalogue/articleModel');


// Fonction pour récupérer toutes les commandes
const getAllCatalogue= async (req, res) => {
    try {
        const articles = await Catalogue.findAll();
        res.status(200).json({
            status: true,
            data: articles,
        });
    } catch (error) {
        console.error("Error while retrieving articles from catalogue:", error);
        res.status(500).json({
            status: false,
            message: "Erreur interne du serveur"
        });
    }
};

const createArticle = async (req, res) => {
    try {
        const { id, name, price, desc} = req.body;

        // Créer une nouvelle commande avec l'objet etapesHistorique
        const newArticle = await Catalogue.create({
            id,
            name,
            price,
            desc
        });

        // Afficher dans la console les données de la commande créée
        console.log('Article créée avec succès:', newArticle);

        res.status(201).json({
            status: true,
            message: 'Article créée avec succès',
            data: newArticle
        });
    } catch (error) {
        console.error("Error while creating Article:", error);
        res.status(500).json({
            status: false,
            message: "Erreur interne du serveur"
        });
    }
};



const getAnArticleFromCatalogue = async (req, res) => {
    const articleId = req.query.id;

    if (!articleId) {
        return res.status(400).json({ status: false, msg: "ID manquant dans la requête" });
    }

    try {
        const result = await Catalogue.findOne({ where: { id: articleId } });
        if (result) {
            res.json({
                status: true,
                msg: "Article trouvé",
                article: result
            });
        } else {
            res.status(404).json({ status: false, msg: "Article non trouvé" });
        }
    } catch (error) {
        console.error("Error in catalogueController:", error);
        res.status(500).json({ status: false, msg: "Erreur serveur" });
    }
};

module.exports = {
    getAllCatalogue, createArticle, getAnArticleFromCatalogue
};
