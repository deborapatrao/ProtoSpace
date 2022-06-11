require("../controller/userController");
module.exports = app => {
    const User = require("../controller/userController");
    let router = require("express").Router();

    /* Creating a new user. */
    router.post("/", User.create);
    /* This is a get request that will return a user with a specific id. */
    router.get("/:id", User.findOne);
    /* This is a get request that will return all users. */
    router.get("/", User.findAll);
    /* This is a put request that will update a user with a specific id. */
    router.put("/:id", User.update);

    app.use('/api/users', router);

};