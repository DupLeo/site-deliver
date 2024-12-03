const Commande = require('./commandeModel'); // Assurez-vous que ce chemin est correct

const createCommande = async (req, res) => {
    try {
        const { name, status, site } = req.body;

        const newCommande = await Commande.create({
            name,
            status,
            site,
            etapesHistorique
        });

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


const updateStep = async (req, res) => {
    try {
        console.log("Requête reçue pour mettre à jour une étape:", req.body);

        const { id } = req.params;
        const { stepName, newData } = req.body;

        if (!stepName || !newData) {
            return res.status(400).json({
                status: false,
                message: "Données invalides : stepName ou newData manquant",
            });
        }

        const commande = await Commande.findByPk(id);
        if (!commande) {
            return res.status(404).json({
                status: false,
                message: "Commande non trouvée",
            });
        }

        const etapesHistorique = commande.etapesHistorique || {};
        etapesHistorique[stepName] = { donnees: newData };

        // Met à jour le statut de la commande
        const nextStatus = passStatus(commande.status);

        if (nextStatus === null) {
            // Si le prochain statut est null, supprime la commande
            await Commande.destroy({ where: { id: commande.id } });
            return res.status(200).json({
                status: true,
                message: "Commande supprimée, aucun autre statut suivant.",
            });
        }

        commande.status = nextStatus;
        commande.etapesHistorique = etapesHistorique;

        const [updated] = await Commande.update(
            { etapesHistorique: commande.etapesHistorique, status: commande.status },
            { where: { id: commande.id } }
        );

        if (updated) {
            console.log("Commande mise à jour avec succès");
        } else {
            console.error("Erreur lors de la mise à jour de la commande");
        }

        res.status(200).json({
            status: true,
            message: "Étape mise à jour avec succès",
            data: commande,
        });
    } catch (error) {
        console.error("Erreur lors de la mise à jour:", error);
        res.status(500).json({
            status: false,
            message: "Erreur interne du serveur",
        });
    }
};

function passStatus(step) {
    const steps = ["disponibilite", "configuration", "controleLivraison", "financement", "virement", "dateLivraison", "packaging"];
    const currentIndex = steps.indexOf(step);
    if (currentIndex === -1) {
        return null;
    }
    if (currentIndex === steps.length - 1) {
        return null;
    }
    return steps[currentIndex + 1];
}

module.exports = {
    createCommande,
    updateStep,
    getAllCommandes
};
