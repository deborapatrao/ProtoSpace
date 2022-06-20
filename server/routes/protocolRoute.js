const controller = require("../controller/protocolController");

module.exports = function (app) {

    const controller = require("../controller/protocolController");
    let router = require("express").Router();

    router.post("/", controller.createProtocol);
    router.post("/guideline", controller.createProtocolGuideline);


    app.use('/api/protocol', router);
};

