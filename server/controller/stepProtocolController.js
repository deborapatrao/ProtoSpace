const db = require("../models")
const Raw = db.sequelize;
const Step = db.step_protocol


exports.findStepsProtocol = async (req, res) => {

    /* A query to find the steps of a protocol. */
    const query = `select step_id     as step_id,
                          description as step_description,
                          note        as step_note,
                          step_number

                   from step_protocol
                            join step_component sc on step_protocol.id = sc.step_id
                   where protocol_id = ${req.body.protocolId}`
    try {
        const [results] = await Raw.query(query);

        if (results) {
            res.status(200).send(results);
        }
    } catch (error) {
       res.status(501).send(error)
    }
}

exports.stepNote = async (req, res) => {

    const findStep = await Step.findOne({where: {id: req.body.step_id}})

    if (findStep) {

        await Step.update({note: req.body.note}, {where: {id: req.body.step_id}}).then(response => {
            res.status(200).send('Step note Updated')
        })

    } else {
        res.send('Step not found!')
    }

}