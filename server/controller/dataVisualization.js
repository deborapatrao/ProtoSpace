const db = require("../models");
const Raw = db.sequelize;

exports.stepPerProtocol = async (req, res) => {
    const query = `select u.name                                                as name_user
                        , sum(case when end_step is not null then 1 else 0 end) as steps
                   from step_user_protocol sup

                            join user_workspace uw on sup.workspace_id = uw.id
                            join users u on uw.user_id = u.id

                   where 1 = 1
                     and sup.protocol_id = ${req.body.protocol_id}
                   group by name_user`

    try {
        const [results] = await Raw.query(query);

        if (results) {
            res.status(200).send(results);
        }
    } catch (error) {
        res.status(501).send(error)
    }
}