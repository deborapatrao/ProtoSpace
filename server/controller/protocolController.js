const db = require("../models")
// const { where } = require("sequelize/types")
const Protocol = db.protocol
const Workspace = db.workspace
// const WorkspaceProtocol = db.workspace_protocol

exports.createProtocolDescription = async (req, res) => {

    const data = {
        name: req.body.name,
        abstract: req.body.abstract,
        author: req.body.author,
        external_link: req.body.external_link,
        disclaimer: req.body.disclaimer
    }

    try {

        const workspaceID = await Workspace.findByPk(req.body.workspaceId)

        const protocolCreated = await Protocol.create(data);

        await workspaceID.addProtocol(protocolCreated, workspaceID).then(data => res.send(data)).catch(error => console.log(error))

    } catch (error) {
        console.log(error)
    }
}


exports.createProtocolGuideline = async (req, res) => {

    const data = {
        guideline: req.body.guideline,
        before_start: req.body.before_start,
        safety_warning: req.body.safety_warning
    }

    try {


        const protocol = req.body.protocol_id

        await Protocol.update(data, {where: {id: protocol}})
            .then(data => res.send(data))
            .catch(error=> {
                res.send({
                    message:
                    error.message
                })
            });

    } catch (error) {
        console.log(error)
    }
}
