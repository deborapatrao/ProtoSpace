module.exports = (sequelize, Sequelize) => {

    return sequelize.define("user_protocol", {

        protocol_id: {
            type: Sequelize.INTEGER,

        },
        user_id: {
            type: Sequelize.INTEGER,

        },
        run_protocol: {
            type: Sequelize.DATE,

        },
    },{  timestamps: false})

}