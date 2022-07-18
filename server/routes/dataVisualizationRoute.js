const controller = require("../controller/dataVisualization");
const {authJwt} = require("../middleware");
let router = require("express").Router();

module.exports = function (app) {

    router.post("/steps", controller.stepPerProtocol);

    app.use('/api/chart/', [authJwt.verifyToken], router);
};
