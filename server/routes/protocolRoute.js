const controller = require("../controller/protocolController");
const {authJwt} = require("../middleware");
const multer = require("multer");
const db = require("../models");
let router = require("express").Router();
const upload = multer({dest: 'temp/'})
const StepImages = db.step_images

module.exports = function (app) {

    router.post("/", upload.single('step_1.1'), controller.createProtocol);

    router.post('/find', controller.findProtocol);

    router.post('/run', controller.runProtocol);

    router.post('/status', controller.statusProtocol);

    router.post('/find/byworkspace', controller.findProtocolWorkspace);


    router.post("/image", upload.single('image'),controller.imgWorkAround)

    app.use('/api/protocol', [authJwt.verifyToken], router);
};

