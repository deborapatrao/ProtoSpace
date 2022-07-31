const db = require("../models");
const UploadImage = require('../images/uploadImages')
const Users = db.users;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const name = req.query.name;
    let condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Users.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving User."
            });
        });
};

exports.findOne = async (req, res) => {
    const user = Users.findOne({
        attributes: {
            exclude: [
                'id',
                'last_login',
                'created_at'
            ]
        },
        where: {
            id: req.body.id
        }
    })
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
};

exports.updateProfile = async (req, res) => {
    const file = req.file;
    const fileName = req.body.fileName;
    const user_name = req.body.user_name
    const data = {
        name: user_name,

    }
    try {
        if (file && fileName) {
            const photo = await UploadImage.profilePhoto(file, fileName)
            data.photo = photo
        }

        Users.update(data,
            {
                where: {
                    id: req.body.user_id
                }
            })
            .then(
                res.status(200).send('Profile Updated!')
            )
            .catch(err => {
                res.status(500).send({
                    message: err.message
                })
            })
    } catch (e) {
        res.status(500).send(e)
    }
}

exports.updatePassword = async (req, res) => {
    const user_id = req.body.user_id;
    const currentPassword = req.body.current_password;
    const newPassword = req.body.new_password;
    const confirmPassword = req.body.confirm_password;
    try {

        const passwordUser = await Users.findByPk(user_id, { attributes: ['password'] })

        if (passwordUser.password === currentPassword) {
            if (newPassword === confirmPassword) {
                Users.update({ password: newPassword }, { where: { id: user_id } })
                    .then(res.status(200).send('Password Updated!'))
                    .catch(error => res.status(500).send(error))
            } else {
                res.status(401).send('Passwords doesn\'t Match!')
            }
        } else {
            res.status(401).send('Current Password Incorrect')
        }


    } catch (e) {
        res.status(500).send(e)
    }

}