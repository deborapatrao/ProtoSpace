const db = require("../models");
const bcrypt = require("bcrypt");
const Users = db.users;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Users
    const User = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        college_number: req.body.college_number,
        role: req.body.role,
        active: req.body.active,
        photo: req.body.photo,

    };
    // Save Users in the database
    Users.create(User)
        .then(data => {
            console.log('data saved')
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Users."
            });
        });
};

/* Find all Users */
exports.findAll = (req, res) => {
    const name = req.query.name;
    let condition = name ? {name: {[Op.like]: `%${name}%`}} : null;
    Users.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving User."
            });
        });
};

/* This is a function that is called when the route is called. */
exports.findOne = (req, res) => {
    const id = req.params.id;
    Users.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tutorial with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({

                message: err
            });
        });
};

/* This is a function that is called when the route is called. */
exports.update = (req, res) => {
    const id = req.params.id;
    Users.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });
};
/*Find all Users by Role*/
exports.findAllByRole = (req, res) => {
    const role = req.params.role;
    Users.findAll({where: role})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving User."
            });
        });
};