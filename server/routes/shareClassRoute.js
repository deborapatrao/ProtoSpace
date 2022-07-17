const controller = require("../controller/shareClassController");
const {authJwt} = require("../middleware");
let router = require("express").Router();

module.exports = function (app) {

    router.post("/users", controller.usersShareProtocol);
    router.post("/", controller.shareProtocol);

    app.use('/api/share', [authJwt.verifyToken], router);
};

