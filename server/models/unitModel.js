module.exports = (sequelize, Sequelize) => {

    return sequelize.define("unit", {
        name: {
            type: Sequelize.STRING,
        },
        symbol: {
            type: Sequelize.STRING,
        },
        component_id: {
            type: Sequelize.INTEGER,
        }
    }, {timestamps: false})
};