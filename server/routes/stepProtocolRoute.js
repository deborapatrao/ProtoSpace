const controller = require("../controller/stepProtocolController");
const {authJwt} = require("../middleware");
let router = require("express").Router();


module.exports = function (app) {

    router.post("/", controller.findStepsProtocol);
    router.post("/note", controller.stepNote);

    router.post('/start', controller.startStep);
    router.post('/end', controller.endStep);

    app.use('/api/step', [authJwt.verifyToken], router);
};

