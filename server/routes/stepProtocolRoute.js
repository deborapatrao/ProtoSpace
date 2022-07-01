const controller = require("../controller/stepProtocolController");
const {authJwt} = require("../middleware");
let router = require("express").Router();

module.exports = function (app) {

    router.post("/", controller.findStepsProtocol);

    app.use('/api/step', [authJwt.verifyToken], router);
};

