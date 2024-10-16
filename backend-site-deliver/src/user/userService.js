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
                return { status: true, msg: "User Validated Successfully" };
            } else {
                return { status: false, msg: "User Validation Failed" };
            }
        } else {
            return { status: false, msg: "User not found" };
        }
    } catch (error) {
        return { status: false, msg: "Invalid Data" };
    }
};
