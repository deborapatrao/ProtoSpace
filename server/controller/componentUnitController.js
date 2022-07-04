const db = require("../models")
const Components = db.components
const Units = db.unit

exports.findComponents = (req, res) => {
    Components.findAll()
        .then(response => {
            res.status(200).send(response)
        })
        .catch(error=>res.send(error))
}

exports.findUnits = (req, res) => {
    Units.findAll({where:{component_id: req.body.component_id}})
        .then(response => {
            res.status(200).send(response)
        })
        .catch(error=>res.send(error))
}