const db = require("../models")
const Raw = db.sequelize;
const Step = db.step_protocol
const uploadImg = require('../config/uploadImg')
const getImg = require('../config/getImageUrl')


exports.findStepsProtocol = async (req, res) => {

    /* A query to find the steps of a protocol. */
    const query = `select id          as step_id,
                          description as step_description,
                          note        as step_note,
                          step_number
                   from step_protocol
                   where protocol_id = ${req.body.protocolId}`
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

        await Step.update({note: req.body.note}, {where: {id: req.body.step_id}}).then(response => {
            res.status(200).send('Step note Updated')
        })

    } else {
        res.send('Step not found!')
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

exports.uploadImg = async ( req,res) => {
    uploadImg(req.body.path, req.body.img).then(data =>{
        res.send(data)
    })
        .catch(err => res.send(err))
}