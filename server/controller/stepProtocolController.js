const db = require("../models")
const Raw = db.sequelize;
const Step = db.step_protocol
const StepUserProtocol = db.step_user_protocol

exports.findStepsProtocol = async (req, res) => {

    /* A query to find the steps of a protocol. */
    const query = `select distinct sp.id                                                    as step_id
                                 , sp.description                                           as step_description
                                 , sup.note                                                 as step_note
                                 , sp.step_number
                                 , (case when sup.end_step is not null then 1 else 0 end)   as end_step_status
                                 , (case when sup.start_step is not null then 1 else 0 end) as start_step_status
                                 , sup.end_step
                                 , sup.start_step
                   from step_user_protocol sup
                            join protocol p on p.id = sup.protocol_id
                            join step_protocol sp on sp.id = sup.step_protocol_id

                   where 1 = 1
                     and p.id = ${req.body.protocolId}
                     and sup.workspace_id = ${req.body.workspace_id}`
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
        const data = {
            step_protocol_id: findStep.id,
            protocol_id: findStep.protocol_id,
            note: req.body.note
        }
        await StepUserProtocol.update(data, {where: {step_protocol_id: req.body.step_id}})
        res.status(200).send(findStep)

    } else {
        res.status(400).send('Step not found!')
    }

}

exports.startStep = async (req, res) => {

    try {
        // await Step.findByPk( req.body.step_id)
        await StepUserProtocol.update({
                start_step: Date(),
                note: req.body.note
            },
            {
                where:
                    {step_protocol_id: req.body.step_id}
            })
            .then(data => {
                res.status(200).send('Step started!')
            }).catch(error => res.status(500).send(error))
    } catch (e) {
        res.send(e)
    }
}

exports.endStep = async (req, res) => {

    try {
        // await Step.findByPk( req.body.step_id)
        await StepUserProtocol.update({
                end_step: Date(),
                note: req.body.note
            },
            {
                where:
                    {step_protocol_id: req.body.step_id}
            })
            .then(data => {
                res.status(200).send('Step Ended!')
            }).catch(error => res.send(error))
    } catch (e) {
        res.send(e)
    }
}
