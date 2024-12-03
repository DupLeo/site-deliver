const Commande = require("/commandeModel");


module.exports.createCommande = async (commandeDetails) => {
    try {
        // TODO : si le temps, faire fonction pour ajouter dans la bdd
        // Vérifiez que l'email n'existe pas déjà
        // const existingUser = await User.findOne({ where: { email: userDetails.email } });
         // if (existingUser) {
             // console.log("User already exists with this email.");
            // return false;
            return false;


        // Chiffrement du mot de passe
        var encrypted = encryptor.encrypt(userDetails.password);

        // Sauvegarder l'utilisateur
        const userModelData = await User.create({
            firstname: userDetails.firstname,
            lastname: userDetails.lastname,
            email: userDetails.email,
            password: encrypted,
            poste: userDetails.poste,
            ville: userDetails.ville,
        });

        console.log("User saved successfully!");
        return true; // Résolution réussie
    } catch (error) {
        console.log("Error in saving user:", error);
        return false; // Échec
    }
};
