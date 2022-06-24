const db = require("../models")
const Raw = db.sequelize;
const Protocol = db.protocol
const Workspace = db.workspace
const User = db.users
const WorkspaceProtocol = db.workspace_protocol


exports.findProtocol = (req, res) => {
    Protocol.findByPk(req.body.protocolId)
        .then(response => {
            res.status(200).send(response)
        })
}
exports.findProtocolWorkspace = async (req, res) => {

    /* A query to find the protocol that is associated with the workspace. */
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

    try {

        const workspaceId = await Workspace.findByPk(req.body.workspaceId)
        // const userId = await User.findByPk(req.body.userId)

        const protocolCreated = await Protocol.create(data)

        // await userId.addProtocol(protocolCreated.id, userId.id).then(data => res.send(data)).catch(error => console.log(error))

        await workspaceId.addProtocol(protocolCreated, workspaceId).then(data => res.send(data)).catch(error => console.log(error))

    } catch (error) {
        console.log(error)
    }
}