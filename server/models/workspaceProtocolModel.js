module.exports = (sequelize, Sequelize) => {

    return sequelize.define("workspace_protocol", {

        protocol_id: {
            type: Sequelize.INTEGER,

        },
        workspace_id: {
            type: Sequelize.INTEGER,

        },
        shared:{
            type: Sequelize.STRING
        }
    },{  timestamps: false})

}