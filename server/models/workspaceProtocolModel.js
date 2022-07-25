module.exports = (sequelize, Sequelize) => {

    return sequelize.define("workspace_protocol", {

        protocol_id: {
            type: Sequelize.INTEGER,

        },
        workspace_id: {
            type: Sequelize.INTEGER,

        },
        shared_status:{
            type: Sequelize.STRING
        }
    },{  timestamps: false})

}