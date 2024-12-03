var express = require('express');
var userController = require('../src/user/userController'); // Chemin correct vers userController
const router = express.Router();

router.route('/login').post(userController.loginUserControllerFn);
router.route('/create').post(userController.createUserControllerFn);

module.exports = router;
