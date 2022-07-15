const db = require("../models");

const Users = db.users;
const Op = db.Sequelize.Op;

/*exports.studentAccess = (req, res) => {
    res.status(200).send("Student Content.");
};
exports.teacherAccess = (req, res) => {
    res.status(200).send("Teacher Content.");
};*/

/* Find all Users */
exports.findAll = (req, res) => {
    const name = req.query.name;
    let condition = name ? {name: {[Op.like]: `%${name}%`}} : null;
    Users.findAll({where: condition})
    unit     .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving User."
        });
    });
};

exports.findOne = async (req, res) => {
    const user = Users.findOne({
        attributes: { exclude: [
            'id',
            'last_login',
            'created_at'
            ]},
        where: {
            id: req.body.id
        }})
            .then(result => {
                res.send(result);
            })
            .catch(err =>{
                res.status(500).send({
                    message: err.message
                })
            })
}
exports.update = async (req,res) =>{
    const update = Users.update(
        {
        name: req.body.name,
        photo: req.body.photo,
        password: req.body.password
        },
        {
        where:{
            id: req.body.id
        }
    })
        .then(result => {
            if(result.password === Users.password) {
                res.send(result);
            }
            return {
                message:  "incorrect  current password"
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message
            })
        })
}