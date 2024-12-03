const Commande = require('./commandeModel'); // Assurez-vous que ce chemin est correct

const createCommande = async (req, res) => {
    try {
        const { name, status, site, etapesHistorique } = req.body;

        // Créer une nouvelle commande avec l'objet etapesHistorique
        const newCommande = await Commande.create({
            name,
            status,
            site,
            etapesHistorique
        });

        // Afficher dans la console les données de la commande créée
        console.log('Commande créée avec succès:', newCommande);

        res.status(201).json({
            status: true,
            message: 'Commande créée avec succès',
            data: newCommande
        });
    } catch (error) {
        console.error("Error while creating commande:", error);
        res.status(500).json({
            status: false,
            message: "Erreur interne du serveur"
        });
    }
};




// Fonction pour récupérer toutes les commandes
const getAllCommandes = async (req, res) => {
    try {
        const commandes = await Commande.findAll();
        res.status(200).json({
            status: true,
            data: commandes,
        });
    } catch (error) {
        console.error("Error while retrieving commandes:", error);
        res.status(500).json({
            status: false,
            message: "Erreur interne du serveur"
        });
    }
};


module.exports = {
    createCommande,
    getAllCommandes
};
