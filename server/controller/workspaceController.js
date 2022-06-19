const db = require("../models");

const Workspace = db.workspace;

exports.userWorkspace = (req, res) => {

    Workspace.findAll({where: {user_id: req.body.id}})
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.status(500).send({
                message:
                error.message || "Some error occurred while retrieving Workspace."
            });
        });
};