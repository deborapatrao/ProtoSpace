module.exports = (sequelize, Sequelize) => {

    return sequelize.define("users", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        college_number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        role: {
            type: Sequelize.STRING,
            allowNull: false
        },
        photo: {
            type: Sequelize.STRING
        },

        last_login: {
            type: Sequelize.DATE
        }
    })
};