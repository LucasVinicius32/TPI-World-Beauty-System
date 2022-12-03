import { DataTypes, Model } from "sequelize";
import db from "../config/Database.config";
(async ()=>{
  await db.sync({force:true});
})
export class Produtos extends Model {}
Produtos.init(
  {
    id_produto: {
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
    
    valor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    marca: {
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
    modelName: "Produtos",
    tableName: "produtos",
  }
);