const { verifySignUp } = require("../middleware");
const controller = require("../controller/userAuthController");
module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post(
        "/api/auth/register",
        // [
        //     verifySignUp.checkDuplicateUsernameOrEmail,
        //
        // ],
        controller.register
    );
    app.post("/api/auth/login", controller.login);
}