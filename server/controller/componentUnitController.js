const db = require("../models")
const Components = db.components
const Units = db.unit
const Raw = db.sequelize;

exports.findComponents = (req, res) => {
    Components.findAll()
        .then(response => {
            res.status(200).send(response)
        })
        .catch(error => res.send(error))
}

exports.findUnits = (req, res) => {
    Units.findAll({where: {component_id: req.body.component_id}})
        .then(response => {
            res.status(200).send(response)
        })
        .catch(error => res.send(error))

}

exports.componentSteps = async (req, res) => {
    const query = `select c.name         as component_name,
                          sc.name        as component_name,
                          sc.information as component_information,
                          sc.value       as component_value,
                          u.name         as unit_name,
                          u.symbol       as symbol
                   from step_component as sc
                            join component c on c.id = sc.component_id
                            join unit u on sc.unit_id = u.id
                   where step_id = ${req.body.stepId}`

    try {
        const [results] = await Raw.query(query);

        if (results) {
            res.status(200).send(results);
        }
    } catch (error) {
        res.status(501).send(error)
    }

}