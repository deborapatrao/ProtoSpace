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
db.workspace = require("./workspaceModel.js")(sequelize, Sequelize);
db.protocol = require("./protocolModel.js")(sequelize, Sequelize);
db.workspace_protocol =  require("./workspaceProtocolModel")(sequelize, Sequelize);
db.protocol.belongsToMany(db.workspace,{through: db.workspace_protocol, as: 'user_workspace', foreignKey: 'protocol_id'})
db.workspace.belongsToMany(db.protocol,{through: db.workspace_protocol, as:'protocol', foreignKey: 'workspace_id'})

module.exports = db;