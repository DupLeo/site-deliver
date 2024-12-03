// initialCommandes.js
const Catalogue = require('../src/catalogue/articleModel');

const initialArticles = [
    {
        id: 1,
        name: 'Chaise en bois',
        price: 20,
        desc: 'Chaise en bois très agréable, idéale pour la salle à manger.'
    },
    {
        id: 2,
        name: 'Bureau moderne',
        price: 150,
        desc: 'Bureau en métal et verre trempé, parfait pour un espace de travail contemporain.'
    },
    {
        id: 3,
        name: 'Table basse scandinave',
        price: 60,
        desc: 'Table basse en bois clair avec pieds inclinés, parfaite pour le salon.'
    },
    {
        id: 4,
        name: 'Étagère murale',
        price: 30,
        desc: 'Étagère minimaliste en métal noir, idéale pour exposer des livres ou des décorations.'
    },
    {
        id: 5,
        name: 'Fauteuil de bureau ergonomique',
        price: 120,
        desc: 'Fauteuil avec soutien lombaire ajustable et accoudoirs confortables.'
    },
    {
        id: 6,
        name: 'Lit en bois massif',
        price: 400,
        desc: 'Lit double en bois de chêne avec finition naturelle et tête de lit intégrée.'
    },
    {
        id: 7,
        name: 'Meuble TV',
        price: 100,
        desc: 'Meuble TV en bois et métal avec rangements pour appareils électroniques.'
    },
    {
        id: 8,
        name: 'Commode vintage',
        price: 250,
        desc: 'Commode à trois tiroirs en bois recyclé avec poignées en laiton.'
    },
    {
        id: 9,
        name: 'Chaise de bar',
        price: 45,
        desc: 'Chaise haute avec assise en cuir synthétique et pieds en acier chromé.'
    },
    {
        id: 10,
        name: 'Armoire à portes coulissantes',
        price: 600,
        desc: 'Grande armoire en bois blanc avec miroirs intégrés sur les portes coulissantes.'
    }
];



async function insertInitialArticles() {
    const articleExist = await Catalogue.count();
    if (articleExist === 0) {
        // Si aucun article n'existe, insérer les articles par défaut
        for (const art of initialArticles) {
            await Catalogue.create(art);
            console.log(`Article '${art.name}' insérée avec succès.`);
        }
    }
}

module.exports = insertInitialArticles;
