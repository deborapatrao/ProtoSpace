const db = require("../models")
const WorspaceProtocol = db.workspace_protocol
const Raw = db.sequelize

exports.usersShareProtocol = async (req, res) => {

    const query = `select u.id as user_id, u.name as user_name, email, u.role, uw.id as workspace_id
                   from users u
                            join user_workspace uw on u.id = uw.user_id
                   where 1 = 1`

    try {
        const [results] = await Raw.query(query);

        if (results) {
            res.status(200).send(results);
        }
    } catch (error) {
        res.status(501).end()
    }

}
exports.shareProtocol = async (req, res) => {
    const protocol = req.body.protocol_id;
    const workspaces = req.body.workspaces;

    if (protocol !== undefined) {
        try {
            for (const workspace of workspaces) {
                const data = {
                    protocol_id: protocol,
                    workspace_id: workspace.workspace_id,
                    shared: 1
                }
                WorspaceProtocol.create(data)
                    .then(data => {
                        res.status(200).send('Protocol Shared')
                    })
                    .catch(err => res.status(500).send('Something went wrong!'))
            }

        } catch (e) {
            res.status(500)
        }
    } else {

        res.status(500).send('Parsed field wrong!')
    }
}