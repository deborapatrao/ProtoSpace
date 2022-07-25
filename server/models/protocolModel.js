module.exports = (sequelize, Sequelize) => {

    return sequelize.define("protocol", {
        name: {
            type: Sequelize.STRING,

        },
        abstract: {
            type: Sequelize.STRING,

        },
        disclaimer: {
            type: Sequelize.STRING,

        },
        author: {
            type: Sequelize.STRING,

        },
        status: {
            type: Sequelize.STRING,
        },
        external_link: {
            type: Sequelize.STRING,

        },
        guideline: {
            type: Sequelize.STRING,

        },
        before_start: {
            type: Sequelize.STRING
        },
        safety_warning: {
            type: Sequelize.STRING
        },
        materials: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.STRING
        },
    })
};