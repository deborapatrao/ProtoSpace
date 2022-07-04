module.exports = (sequelize, Sequelize) => {

    return sequelize.define("step_component", {
        name: {
            type: Sequelize.STRING,
        },
        information: {
            type: Sequelize.STRING,
        },
        value: {
            type: Sequelize.STRING,
        },
        unit_id: {
            type: Sequelize.INTEGER,
        },
        step_id: {
            type: Sequelize.INTEGER,
        },
        component_id: {
            type: Sequelize.INTEGER,
        },
    }, {timestamps: false})
};