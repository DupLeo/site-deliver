var userService = require('./userService');

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
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
    } catch (error) {
        console.error("Error in loginUserControllerFn:", error);
        res.status(500).send({ "status": false, "message": "Internal Server Error" });
    }
};

module.exports = { createUserControllerFn, loginUserControllerFn };
