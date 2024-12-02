var User = require('./userModel'); // Importer le modèle Sequelize
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

module.exports.createStudentDBService = async (userDetails) => {
    try {
        // Vérifiez que l'email n'existe pas déjà
        const existingUser = await User.findOne({ where: { email: userDetails.email } });
        if (existingUser) {
            console.log("User already exists with this email.");
            return false;
        }

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

module.exports.loginuserDBService = async (userDetails) => {
    try {
        const result = await User.findOne({ where: { email: userDetails.email } });

        if (result) {
            var decrypted = encryptor.decrypt(result.password);

            if (decrypted === userDetails.password) {
                // Retourner les informations utilisateur en cas de succès
                return {
                    status: true,
                    msg: "User Validated Successfully",
                    user: {
                        id: result.id,
                        firstname: result.firstname,
                        lastname: result.lastname,
                        email: result.email,
                        poste: result.poste,
                        ville: result.ville, // Assurez-vous que la colonne existe dans votre modèle User
                    }
                };
            } else {
                return { status: false, msg: "User Validation Failed" };
            }
        } else {
            return { status: false, msg: "User not found" };
        }
    } catch (error) {
        console.error("Error in loginuserDBService:", error);
        return { status: false, msg: "Invalid Data" };
    }
};

