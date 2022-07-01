const db = require("../models")
const Raw = db.sequelize;
const Step = db.step_protocol


exports.findStepsProtocol = async (req, res) => {


    /* A query to find the steps of a protocol. */
    const query = `select step_protocol.id          as step_id,
                          step_number,
                          step_protocol.description as step_Description,
                          start_run,
                          end_run
                   from step_protocol
                            right join protocol p on step_protocol.protocol_id = p.id
                   where protocol_id = ${req.body.protocolId}`

    try {
        const [results] = await Raw.query(query);

        if (results) {
            res.status(200).send(results);
        }
    } catch (error) {
        console.log(error)
    }
}