const db = require("../models")
const Raw = db.sequelize;
const Protocol = db.protocol
const Workspace = db.workspace
const User = db.users
const Step = db.step_protocol
const StepComponents = db.step_component
const StepUserProtocol = db.step_user_protocol

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

exports.runProtocol = async = (req, res) => {

    try {
        Protocol.update({
                start_run: Date()
            },
            {
                where:
                    {id: req.body.protocolId}
            })
            .then(data => {
                res.status(200).send('Step started!')
            }).catch(error => res.send(error))

    } catch (e) {
        res.status(500).send(e)
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

        for (const step of stepsRequest) {

            const stepData = {
                step_number: step.step_number,
                description: step.step_description,
                protocol_id: protocolCreated.id
            }

            if (stepData) {

                const StepCreate = await Step.create(stepData)
                for (components of step.components) {
                    const componentData = {
                        name: components.component_name,
                        information: components.component_information,
                        value: components.component_value,
                        step_id: StepCreate.id,
                        unit_id: components.unit_id,
                        component_id: components.component_id
                    }
                    if (StepCreate) {
                        await StepComponents.create(componentData)
                    }
                }
                const stepUserData = {
                    step_protocol_id: StepCreate.id,
                    protocol_id: protocolCreated.id,
                    workspace_id: workspaceId.id
                }
                await StepUserProtocol.create(stepUserData)
            }

        }

        // await userId.addProtocol(protocolCreated, userId)
        await workspaceId.addProtocol(protocolCreated, workspaceId).then(data => res.send(data)).catch(error => console.log(error))

    } catch (error) {
        console.log(error)
    }
}
