const db = require("../models");
const Protocol = db.protocol
const Workspace = db.workspace
const WorkspaceProtocol = db.workspace_protocol

exports.createProtocol = async (req, res) => {

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