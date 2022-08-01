module.exports = (sequelize, Sequelize) => {

    return sequelize.define("step_images", {
        step_id: {
            type: Sequelize.INTEGER,
        },
        image: {
            type: Sequelize.STRING
        },
        step_number: {
            type: Sequelize.INTEGER
        },
        protocol_id: {
            type: Sequelize.INTEGER
        },

    }, {timestamps: false})
};