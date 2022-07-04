const db = require("../models")
const Raw = db.sequelize;
const Protocol = db.protocol
const Workspace = db.workspace
const User = db.users
const Step = db.step_protocol
const StepComponents = db.step_component

exports.findProtocol = (req, res) => {
    Protocol.findByPk(req.body.protocolId)
        .then(response => {
            res.status(200).send(response)
        })
}
exports.findProtocolWorkspace = async (req, res) => {

    /* A query to find the protocol that is associated with thäe workspace. */
    const query = `select name,
                          abstract,
                          disclaimer,
                          external_link,
                          guideline,
                          before_start,
                          safety_warning,
                          author,
                          materials,
                          shared,
                          published,
                          workspace_id,
                          protocol_id,
                          created_at,
                          updated_at
                   from protocol
                            right join workspace_protocol wp on protocol.id = wp.protocol_id
                   where wp.workspace_id = ${req.body.workspaceId}`

    try {
        const [results, metadata] = await Raw.query(query);
        /* Checking if the results are not empty. If it is not empty, it will send the results. */
        if (results) {
            res.status(200).send(results);
        }
    } catch (error) {
        console.log(error)
    }
}

exports.createProtocol = async (req, res) => {

    const data = {
        name: req.body.name,
        abstract: req.body.abstract,
        author: req.body.author,
        external_link: req.body.external_link,
        disclaimer: req.body.disclaimer,
        guideline: req.body.guideline,
        before_start: req.body.before_start,
        safety_warning: req.body.safety_warning,
        materials: req.body.materials
    }
    const stepsRequest = req.body.steps;

    try {

        const workspaceId = await Workspace.findByPk(req.body.workspaceId)
        // const userId = await User.findByPk(req.body.userId)

        const protocolCreated = await Protocol.create(data)
        let i = 0
        for (const step of stepsRequest) {

            const stepData = {
                step_number: step.step_number,
                description: step.step_description,
                protocol_id: protocolCreated.id
            }
            console.log(i)

            const StepCreate = await Step.create(stepData)

            const componentData = {
                name: step.component_name,
                information: step.component_information,
                value: step.component_value,
                step_id: StepCreate.id,
                unit_id: step.unit_id,
                component_id: step.component_id
            }
            const stepCreate = await StepComponents.create(componentData)

            console.log(stepCreate)
        }

        await StepComponents.create()

        // await userId.addProtocol(protocolCreated, userId)
        await workspaceId.addProtocol(protocolCreated, workspaceId).then(data => res.send(data)).catch(error => console.log(error))

    } catch (error) {
        console.log(error)
    }
}
exports.startStep = async (req, res) => {

    try {
        // await Step.findByPk( req.body.step_id)
        await Step.update({
                start_run: Date()
            },
            {
                where:
                    {id: req.body.step_id}
            })
            .then(data => {
                res.status(200).send('Step started!')
            }).catch(error => res.send(error))
    } catch (e) {
        res.send(e)
    }
}

exports.endStep = async (req, res) => {

    try {
        // await Step.findByPk( req.body.step_id)
        await Step.update({
                end_run: Date()
            },
            {
                where:
                    {id: req.body.step_id}
            })
            .then(data => {
                res.status(200).send('Step ended!')
            }).catch(error => res.send(error))
    } catch (e) {
        res.send(e)
    }
}