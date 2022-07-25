module.exports = (sequelize, Sequelize) => {

    return sequelize.define("user_protocol", {

        workspace_id: {
            type: Sequelize.INTEGER,

        },
        protocol_id: {
            type: Sequelize.INTEGER,

        },
        start_run: {
            type: Sequelize.DATE,

        },
        end_run: {
            type: Sequelize.DATE,

        },
    },{  timestamps: false})

}