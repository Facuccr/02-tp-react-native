const sequelize = require("../config/db.js");
const Cliente = require("./cliente.js");

const db = {};
db.sequelize = sequelize;
db.Cliente = Cliente;

module.exports = db;
