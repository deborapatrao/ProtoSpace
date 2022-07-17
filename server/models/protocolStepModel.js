module.exports = (sequelize, Sequelize) => {

    return sequelize.define("step_protocol", {
        protocol_id: {
            type: Sequelize.STRING,


        },
        step_number: {
            type: Sequelize.INTEGER,


        },
        description: {
            type: Sequelize.STRING,


        },

    },{  timestamps: false})
};