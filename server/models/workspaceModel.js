module.exports = (sequelize, Sequelize) => {

    return sequelize.define("user_workspace", {

        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        protocol_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

    },{  timestamps: false})
};