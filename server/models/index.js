const dbConfig = require("../database/connection.js");
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    define: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        freezeTableName: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("./userModel.js")(sequelize, Sequelize);
module.exports = db;