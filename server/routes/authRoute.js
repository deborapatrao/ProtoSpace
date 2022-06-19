module.exports = function (app) {

    const {verifySignUp} = require("../middleware");
    const controller = require("../controller/userAuthController");
    let router = require("express").Router();

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    router.post(
        "/register",
        // [
        //     verifySignUp.checkDuplicateUsernameOrEmail,
        //
        // ],
        controller.register
    );
    router.post("/login", controller.login);
    app.use('/api/auth', router);
}