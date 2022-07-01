const controller = require("../controller/protocolController");
const {authJwt} = require("../middleware");
let router = require("express").Router();

module.exports = function (app) {

    router.post("/", controller.createProtocol);

    router.post('/find/', controller.findProtocol);

    router.post('/find/byworkspace/', controller.findProtocolWorkspace);

    router.post('/step/start/', controller.startStep);
    router.post('/step/end/', controller.endStep);

    app.use('/api/protocol', [authJwt.verifyToken], router);
};

