module.exports = (sequelize, Sequelize) => {

    return sequelize.define("protocol", {
        name: {
            type: Sequelize.STRING,
            validate:{
                allowNull:false
            }
        },
        abstract: {
            type: Sequelize.STRING,
            validate:{
                allowNull:false
            }
        },
        disclaimer: {
            type: Sequelize.STRING,
            validate:{
                allowNull:false
            }
        },
        author:{
            type: Sequelize.STRING,
            validate:{
                allowNull:false
            }
        },
        external_link: {
            type: Sequelize.STRING,
            validate:{
                allowNull:false,
                isUrl: true,
            }
        },
        guideline: {
            type: Sequelize.STRING,
            validate:{
                allowNull:false
            }
        },
        before_start: {
            type: Sequelize.STRING
        },
        safety_warning: {
            type: Sequelize.STRING
        }
    })
};