const controller = require("../controller/protocolController");
const {authJwt} = require("../middleware");
const multer = require("multer");
let router = require("express").Router();
const upload = multer({dest: 'temp/'})


module.exports = function (app) {

    router.post("/", upload.single('step_1'), controller.createProtocol);

    router.post('/find', controller.findProtocol);

    router.post('/run', controller.runProtocol);

    router.post('/status', controller.statusProtocol);

    router.post('/find/byworkspace', controller.findProtocolWorkspace);

    app.use('/api/protocol', [authJwt.verifyToken],  router);
};

