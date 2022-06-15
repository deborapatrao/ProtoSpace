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

