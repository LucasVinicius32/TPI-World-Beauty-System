import { DataTypes, Model } from "sequelize";
import db from "../config/Database.config";
(async ()=>{
  await db.sync({force:true});
})
export class Cliente extends Model {}
Cliente.init(
  {
    id_cliente: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
      onDelete: "CASCADE",
    },

    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    genero: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: "Cliente",
    tableName: "Cliente",
  }
);