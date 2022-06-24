const controller = require("../controller/protocolController");
const {authJwt} = require("../middleware");

module.exports = function (app) {

    const controller = require("../controller/protocolController");
    let router = require("express").Router();

    router.post("/", controller.createProtocol);

    router.post('/find/', controller.findProtocol);

    router.post('/find/byworkspace/', controller.findProtocolWorkspace);

    app.use('/api/protocol', [authJwt.verifyToken], router);
};

