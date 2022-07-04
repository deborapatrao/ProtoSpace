module.exports = (sequelize, Sequelize) => {

    return sequelize.define("component", {
        name: {
            type: Sequelize.STRING,
        }
    }, {timestamps: false})
};