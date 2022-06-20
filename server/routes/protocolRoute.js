const controller = require("../controller/protocolController");

module.exports = function (app) {

    const controller = require("../controller/protocolController");
    let router = require("express").Router();

    router.get("/", controller.createProtocolDescription);
    router.post("/", controller.createProtocolDescription);
    router.post("/guideline", controller.createProtocolGuideline);


    app.use('/api/protocol', router);
};

