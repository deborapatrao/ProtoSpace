const {authJwt} = require("../middleware");
const controller = require("../controller/userController");
const multer = require("multer");
const upload = multer({dest: 'temp/'})

module.exports = function (app) {

    const {authJwt} = require("../middleware");
    const controller = require("../controller/userController");
    let router = require("express").Router();

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });


    router.get("/", controller.findAll);
    router.post("/profile", controller.findOne);
    router.post("/profile/update",  upload.single('image'), controller.update);

    app.use('/api/users', [authJwt.verifyToken], router);
};