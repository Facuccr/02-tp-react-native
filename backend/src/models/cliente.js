const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const Cliente = sequelize.define("Cliente", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  problema: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    defaultValue: "pendiente",
  },
  personajeAsignado: {
    type: DataTypes.STRING,
  },
  imagen: {
    type: DataTypes.STRING,
  },
});

module.exports = Cliente;
