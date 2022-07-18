module.exports = (sequelize, Sequelize) => {

    return sequelize.define("step_user_protocol", {
        protocol_id: {
            type: Sequelize.INTEGER,
        },
        step_protocol_id: {
            type: Sequelize.INTEGER,
        },
        workspace_id: {
            type: Sequelize.INTEGER,
        },
        note: {
            type: Sequelize.STRING,
        },
        start_step: {
            type: Sequelize.DATE,
        },
        end_step: {
            type: Sequelize.DATE,
        },
    }, {timestamps: false})
};