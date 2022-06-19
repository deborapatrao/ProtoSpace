
module.exports = function (app) {

    const controller = require("../controller/protocolController");
    let router = require("express").Router();

    router.post("/", controller.createProtocol);

    app.use('/api/protocol', router);
};

