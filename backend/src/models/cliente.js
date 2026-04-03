import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

export const Cliente = sequelize.define("Cliente", {
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
