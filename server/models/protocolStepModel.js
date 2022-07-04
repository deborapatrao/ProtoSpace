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
        note: {
            type: Sequelize.STRING,

        },
        start_run: {
            type: Sequelize.DATE,

        },
        end_run: {
            type: Sequelize.DATE,


        }
    },{  timestamps: false})
};