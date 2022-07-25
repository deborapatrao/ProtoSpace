const db = require("../models")
const Raw = db.sequelize;
const Protocol = db.protocol
const Step = db.step_protocol
const Workspace = db.workspace
const StepImages = db.step_images
const UserProtocol = db.user_protocol
const StepComponents = db.step_component
const StepUserProtocol = db.step_user_protocol
const UploadImage = require('../images/uploadImages')

exports.findProtocol = (req, res) => {
    Protocol.findByPk(req.body.protocolId)
        .then(response => {
            res.status(200).send(response)
        })
}
exports.findProtocolWorkspace = async (req, res) => {

    /* A query to find the protocol that is associated with the workspace. */
    const query = `select p.name
                        , (case when up.start_run is not null then 1 else 0 end) as start_run_status
                        , (case when up.end_run is not null then 1 else 0 end)   as end_run_status
                        , end_run as end_run_date
                        , up.start_run as start_run_date
                        , p.abstract
                        , p.disclaimer
                        , p.external_link
                        , p.guideline
                        , p.before_start
                        , p.safety_warning
                        , p.author
                        , p.materials
                        , p.created_at
                        , p.updated_at
                        , p.published
                        , wp.workspace_id
                        , wp.protocol_id
                        , wp.shared_status

                   from protocol p
                            join workspace_protocol wp on p.id = wp.protocol_id
                            left join user_protocol up on wp.workspace_id = up.workspace_id and p.id = up.protocol_id
                   where 1 = 1
                     and status = 'A'
                     and wp.workspace_id = ${req.body.workspaceId}`

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

exports.runProtocol = async (req, res) => {
    const Protocol_id = req.body.protocol_id
    const Workspace_id = req.body.workspace_id

    const data = {
        protocol_id: Protocol_id,
        workspace_id: Workspace_id,
    }

    try {
        const runProtocol = await UserProtocol.findOne({attributes: ["start_run"]},
            {
                where:
                    {
                        workspace_id: Workspace_id, protocol_id: Protocol_id
                    }
            })
        if (runProtocol) {
            data.end_run = Date()
            UserProtocol.update(data
                , {
                    where: {
                        workspace_id: Workspace_id, protocol_id: Protocol_id
                    }
                })
                .then(
                    data => {
                        res.send(data)
                    }
                ).catch(error => res.send(error))
        } else {
            data.start_run = Date()
            UserProtocol.create(data)
                .then(
                    data => {
                        res.send(data)
                    }
                ).catch(error => res.send(error))
        }

    } catch (e) {
        res.status(500).send(e)
    }


}

exports.createProtocol = async (req, res) => {
    const protocol_id = req.body.protocol_id
    const publish = req.body.published;
    const file = req.files;
    const fileName = req.body.fileName;

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
    if (publish) {
        data.published = publish
    }

    const stepsRequest = req.body.steps;

    const workspaceId = await Workspace.findByPk(req.body.workspaceId);
    let steps_ids = []


    try {

        /* This is checking if the protocol_id is not null. If it is not null, it will find the protocol by the
        protocol_id. If it is found, it will update the protocol. */
        if (protocol_id) {

            const findProtocol = await Protocol.findByPk(protocol_id)

            if (findProtocol) {
                try {

                    await Protocol.update(data, {where: {id: protocol_id}});

                    for (const step of stepsRequest) {

                        const stepData = {
                            description: step.step_description
                        }

                        const stepUpdate = await Step.update(stepData, {
                            where: {
                                protocol_id: protocol_id,
                                step_number: step.step_number
                            }
                        });

                        let stepFind = await Step.findOne(
                            {attributes: ['id']},
                            {
                                where: {
                                    protocol_id: protocol_id,
                                    step_number: step.step_number
                                }
                            });

                        for (components of step.components) {
                            const componentData = {
                                name: components.component_name,
                                information: components.component_information,
                                value: components.component_value,
                                step_id: stepFind.id,
                                unit_id: components.unit_id,
                                component_id: components.component_id
                            }

                            if (stepUpdate) {
                                await StepComponents.update(componentData, {where: {step_id: stepFind.id}})
                            }
                        }
                    }

                    res.status(200).send('Protocol Updated!');
                } catch (error) {
                    res.status(500).send(error)
                }
            }
            /* This is creating a new protocol. */
        } else {
            try {

                const protocolCreated = await Protocol.create(data)

                for (const step of stepsRequest) {

                    const stepData = {
                        step_number: step.step_number,
                        description: step.step_description,
                        protocol_id: protocolCreated.id
                    }

                    if (stepData) {

                        const StepCreate = await Step.create(stepData)
                        // const photo = await UploadImage.profilePhoto(file, fileName, protocolCreated.id)
                        steps_ids.push({"step_id": StepCreate.id})
                        const stepImage = {}
                        // await StepImages.create()
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

                workspaceId.addProtocol(protocolCreated, workspaceId)
                    .then(data => res.status(200).send([...data, [...steps_ids]]))
                    .catch(error => {
                        res.status(500).send(error)
                    })
            } catch (error) {
                console.log('that: ', error);
                res.status(500).send(error)
            }
        }
    } catch (error) {
        res.status(500).send(error)
    }

}

exports.statusProtocol = async (req, res) => {
    const status = req.body.status;
    const data = {
        status: status
    }
    try {
        await Protocol.update(data, {where: {id: req.body.protocol_id}})
            .then(res.status(200).send(`${status === "A" ? "Protocol Activated" : "Protocol Inactivated"}`))
    } catch (e) {
        res.status(501).send('Something went wrong!')
    }

}

