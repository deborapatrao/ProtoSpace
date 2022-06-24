module.exports = (sequelize, Sequelize) => {

    return sequelize.define("users", {
        name: {
            type: Sequelize.STRING,
            validate: {
                allowNull: false,
                isAlpha: true
            }
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                allowNull: false,
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            validate: {
                allowNull: false,

            }
        },
        college_number: {
            type: Sequelize.INTEGER,
            validate: {
                allowNull: false
            }
        },
        role: {
            type: Sequelize.STRING,
            validate: {
                allowNull: false
            }
        },
        photo: {
            type: Sequelize.STRING
        },

        last_login: {
            type: Sequelize.DATE,
            validate: {
                isDate: true
            }
        }
    })
};