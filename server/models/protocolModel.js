module.exports = (sequelize, Sequelize) => {

    return sequelize.define("protocol", {
        name: {
            type: Sequelize.STRING,

        },
        description_id: {
            type: Sequelize.INTEGER,

        },
        guideline_id: {
            type: Sequelize.INTEGER,

        },
        materials_id: {
            type: Sequelize.INTEGER,

        },
        step_id: {
            type: Sequelize.INTEGER,
        }
    })
};