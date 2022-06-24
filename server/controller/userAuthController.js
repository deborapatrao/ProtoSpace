const db = require("../models");
const config = require("../config/auth");
const Users = db.users;
const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Raw = db.sequelize;
const WorkspaceProtocol = db.workspace_protocol

exports.register = (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
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
        password: req.body.password,
        college_number: req.body.college_number,
        role: req.body.role,
        photo: req.body.photo,

    };
    // Save Users in the database
    try {
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
    } catch (error) {
        console.log(error)
    }
};

exports.login = (req, res) => {

    Users.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(async user => {
            const query = `select user_workspace.id as workspaceId
                           from user_workspace
                                    join users u on u.id = user_workspace.user_id
                           where user_id = ${user.id}`
            const workspaceId = await Raw.query(query)
            if (!user) {
                return res.status(404).send({message: "User Not found."});
            }

            // let passwordIsValid = bcrypt.compareSync(
            //     req.body.password,
            //     user.password
            // );

            if (req.body.password !== user.password) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }


            let token = jwt.sign({id: user.id}, config.secret, {
                expiresIn: 86400 // 24 hours
            });

            res.status(200).send({
                id: user.id,
                name: user.name,
                email: user.email,
                roles: user.role,
                accessToken: token,
                workspaceId

            });


        })
        .catch(err => {
            res.status(500).send({message: err.message});
        });
};