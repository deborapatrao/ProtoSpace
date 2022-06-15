const db = require("../models");
const Users = db.user;
checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Email
    Users.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Failed! Email is already in use!"
            });
        }

    }).catch(error=>console.log(error));
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,

};
module.exports = verifySignUp;