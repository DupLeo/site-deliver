// initialCommandes.js
const Commande = require('./src/commande/commandeModel'); // Importation du modèle Commande

const initialCommandes = [
    {
        name: 'Chaise en bois',
        status: 'disponibilite',
        site: "chambery",
        etapesHistorique: {
            disponibilite: { donnees: { availability: 'non spécifié', selectedDate: '' } },
            configuration: { donnees: { documentation: false, preparationFee: { enabled: false, type: '', amount: 0, comment: '' } } },
            controleLivraison: { donnees: { passage: false, date: '', configuration: false } },
            financement: { donnees: { status: '' } },
            dateLivraison: { donnees: { estimatedDate: '' } },
            virement: { donnees: { status: false } },
            packaging: { donnees: { readyForPackaging: false } },
        },
    },
    {
        name: 'Table basse',
        status: 'configuration',
        site: "chambery",
        etapesHistorique: {
            disponibilite: { donnees: { availability: 'disponible ulterieurement', selectedDate: '2024-12-13' } },
            configuration: { donnees: { documentation: false, preparationFee: { enabled: false, type: '', amount: 0, comment: '' } } },
            controleLivraison: { donnees: { passage: false, date: '', configuration: false } },
            financement: { donnees: { status: '' } },
            dateLivraison: { donnees: { estimatedDate: '' } },
            virement: { donnees: { status: false, commentaire: ''} },
            packaging: { donnees: { readyForPackaging: false } },
        },
    },
    {
        name: 'Bureau en verre',
        status: 'controleLivraison',
        site: "alberville",
        etapesHistorique: {
            disponibilite: { donnees: { availability: 'disponible immediatement' } },
            configuration: { donnees: { documentation: false, preparationFee: { enabled: false, type: '', amount: 0, comment: '' } } },
            controleLivraison: { donnees: { passage: false, date: '', configuration: false } },
            financement: { donnees: { status: '' } },
            dateLivraison: { donnees: { estimatedDate: '' } },
            virement: { donnees: { status: false, commentaire: ''} },
            packaging: { donnees: { readyForPackaging: true } },
        },
    },
    {
        name: 'Lampe de salon',
        status: 'financement',
        site: "alberville",
        etapesHistorique: {
            disponibilite: { donnees: { availability: 'disponible immediatement' } },
            configuration: { donnees: { documentation: false, preparationFee: { enabled: true, type: 'emballe', amount: 120, comment: 'Assemblage à faire par le client' } } },
            controleLivraison: { donnees: { passage: true, date: '2024-12-05T15:30:00', configuration: true } },
            financement: { donnees: { status: '' } },
            dateLivraison: { donnees: { estimatedDate: '' } },
            virement: { donnees: { status: false, commentaire: ''} },
            packaging: { donnees: { readyForPackaging: false } },
        },
    },
    {
        name: 'Canapé cuir',
        status: 'dateLivraison',
        site: "chambery",
        etapesHistorique: {
            disponibilite: { donnees: { availability: 'disponible ulterieurement', selectedDate: '15/12/2024' } },
            configuration: { donnees: { documentation: false, preparationFee: { enabled: false, type: '', amount: 0, comment: '' } } },
            controleLivraison: { donnees: { passage: true, date: '2024-12-05T16:30:00', configuration: false } },
            financement: { donnees: { status: 'livraison' }},
            dateLivraison: { donnees: { estimatedDate: '' } },
            virement: { donnees: { status: false, commentaire: ''} },
            packaging: { donnees: { readyForPackaging: false } },
        },
    },
    {
        name: 'Meuble TV',
        status: 'virement',
        site: "annecy",
        etapesHistorique: {
            disponibilite: { donnees: { availability: 'disponible immediatement' } },
            configuration: { donnees: { documentation: false, preparationFee: { enabled: false, type: '', amount: 0, comment: '' } } },
            controleLivraison: { donnees: { passage: true, date: '2024-12-15T10:30:00', configuration: false } },
            financement: { donnees: { status: 'livraison'} },
            dateLivraison: { donnees: { estimatedDate: '2024-12-03' } },
            virement: { donnees: { status: false, commentaire: ''} },
            packaging: { donnees: { readyForPackaging: false } },
        },
    },
    {
        name: 'Armoire en bois',
        status: 'packaging',
        site: "annecy",
        etapesHistorique: {
            disponibilite: { donnees: { availability: 'disponible immediatement' } },
            configuration: { donnees: { documentation: false, preparationFee: { enabled: true, type: 'vrac', amount: 100, comment: 'SAlut' } } },
            controleLivraison: { donnees: { passage: false, date: '', configuration: true } },
            financement: { donnees: { status: 'oui', amount: 400, paymentMethod: 'chèque' } },
            dateLivraison: { donnees: { estimatedDate: '2024-12-03' } },
            virement: { donnees: { status: true, commentaire: ''} },
            packaging: { donnees: { readyForPackaging: '' } },
        },
    },
];


async function insertInitialCommandes() {
    const commandesExist = await Commande.count();
    if (commandesExist === 0) {
        // Si aucune commande n'existe, insérer les commandes par défaut
        for (const commande of initialCommandes) {
            await Commande.create(commande);
            console.log(`Commande '${commande.name}' insérée avec succès.`);
        }
    }
}

module.exports = insertInitialCommandes;
