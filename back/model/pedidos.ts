import { DataTypes, Model } from "sequelize";
import db from "../config/Database.config";
import { Produtos } from "./produtos";
import { Cliente } from "./cliente";

(async ()=>{
  await db.sync({force:true});
})
export class Pedidos extends Model {}
Pedidos.init(
  {
    id_pedido: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
      onDelete: "CASCADE",
    },

  
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    valor_total: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
  },
  { 
    timestamps: false,
    sequelize: db,
    modelName: "Pedidos",
    tableName: "pedidos",
  }
);

Cliente.hasMany(Pedidos,{foreignKey: 'id_cliente'});
Produtos.hasMany(Pedidos,{foreignKey: 'id_produto'});