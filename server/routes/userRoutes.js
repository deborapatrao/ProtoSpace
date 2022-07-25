const {authJwt} = require("../middleware");
const controller = require("../controller/userController");
const multer = require("multer");
const upload = multer({dest: 'temp/'})
let router = require("express").Router();

module.exports = function (app) {

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });


    router.get("/", controller.findAll);
    router.post("/profile", controller.findOne);
    router.post("/profile/update",  upload.single('image'), controller.updateProfile);
    router.post("/profile/update/password",  upload.single('image'), controller.updatePassword);

    app.use('/api/users', [authJwt.verifyToken], router);
};