const controller = require("../controller/componentUnitController");
const {authJwt} = require("../middleware");
let router = require("express").Router();

module.exports = function (app) {

    router.post("/", controller.findComponents);
    router.post("/unit", controller.findUnits);
    router.post("/step", controller.componentSteps);


    app.use('/api/component', [authJwt.verifyToken], router);
};

