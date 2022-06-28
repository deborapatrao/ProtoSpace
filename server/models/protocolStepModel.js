module.exports = (sequelize, Sequelize) => {

    return sequelize.define("step_protocol", {
        protocol_id: {
            type: Sequelize.STRING,
            allowNull: false,

        },
        step_number: {
            type: Sequelize.INTEGER,
            allowNull: true,

        },
        step_id:{
            type: Sequelize.INTEGER,
            allowNull: true,

        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,

        },
        start_run: {
            type: Sequelize.DATE,
            allowNull: true,


        },
        end_run: {
            type: Sequelize.DATE,
            allowNull: true,

        }
    },{  timestamps: false})
};