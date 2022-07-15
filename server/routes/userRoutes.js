const {authJwt} = require("../middleware");
const controller = require("../controller/userController");
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
    /*
        app.get(
            "/api/role/student",
            [authJwt.verifyToken],
            controller.studentAccess
        );
        app.get(
            "/api/role/teacher",
            [authJwt.verifyToken],
            controller.teacherAccess
        );
    */

    router.get("/", controller.findAll);
    router.post("/profile/", controller.findOne);
    router.post("/profile/update", controller.update);

    app.use('/api/users', [authJwt.verifyToken], router);
};