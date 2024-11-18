var userService = require('./userService');
var jwt = require('jsonwebtoken'); // Importation du module jsonwebtoken

var createUserControllerFn = async (req, res) => {
    try {
        console.log(req.body);
        var status = await userService.createStudentDBService(req.body);
        console.log(status);

        if (status) {
            res.send({ "status": true, "message": "User created successfully" });
        } else {
            res.send({ "status": false, "message": "Error creating user" });
        }
    } catch (err) {
        console.error("Error in createUserControllerFn:", err);
        res.status(500).send({ "status": false, "message": "Internal Server Error" });
    }
};

var loginUserControllerFn = async (req, res) => {
    try {
        const result = await userService.loginuserDBService(req.body);
        if (result.status) {
            // Générer un token JWT si l'utilisateur est trouvé
            const token = jwt.sign(
                { userId: result.userId, email: result.email }, // Payload du token
                'your-secret-key', // Clé secrète (tu devrais la stocker dans un fichier .env pour plus de sécurité)
                { expiresIn: '1h' } // Expiration du token (par exemple 1 heure)
            );

            // Envoyer le token dans la réponse
            res.send({
                status: true,
                message: 'Login successful',
                token: token // Retourne le token généré
            });
        } else {
            res.send({ status: false, message: result.msg });
        }
    } catch (error) {
        console.error("Error in loginUserControllerFn:", error);
        res.status(500).send({ status: false, message: "Internal Server Error" });
    }
};

module.exports = { createUserControllerFn, loginUserControllerFn };
