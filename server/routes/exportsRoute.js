const controller = require("../images/generatePDF");
const { authJwt } = require("../middleware");

let router = require("express").Router();


module.exports = function (app) {

    router.post("/pdf", controller.exportPDF);

    app.use('/api/generates', router);
};
