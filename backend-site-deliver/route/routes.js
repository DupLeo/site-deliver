var express = require('express');
var userController = require('../src/user/userController'); // Assurez-vous que le chemin est correct
const router = express.Router();

router.route('/user/login').post(userController.loginUserControllerFn);
router.route('/user/create').post(userController.createUserControllerFn);

module.exports = router;
