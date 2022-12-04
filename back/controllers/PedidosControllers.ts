import { Pedidos } from "../model/Pedidos";
import { Request, Response } from "express";
import { Cliente } from "../model/cliente";
import { Produtos } from "../model/produtos";

export class PedidosControllers {

  async create(req: Request, res: Response) {

    
    const {cpf} = req.body;
    try {
      const Clientes = await Cliente.findOne({where: {cpf}});
      const produtos = await Produtos.findOne({where: {id_produto: req.body.id_produto}});
      

      const allprodutos = await Produtos.findAll()

      var condicao = false

      const id_cliente = Clientes?.getDataValue('id_cliente');

      
      
      if(typeof(id_cliente) == undefined || req.body.id_produto in (allprodutos) == false || produtos == null){
        var condicao = true
        return res.status(500).json({ error: "ERROR" });
      }

      const valortotal = produtos?.getDataValue('valor') * req.body.quantidade;


      if (condicao == false){
        const pedidos = await Pedidos.create({ cpf: cpf , 
          id_produto : req.body.id_produto,
           quantidade: req.body.quantidade, 
           valor_total: valortotal, 
           id_cliente: id_cliente});
       
            return res.json(pedidos);
      }
 
    } catch (e) {
      return res.status(500).json({ error: "Cannot create pedidos" });
    }
  }

  
  async delete(req: Request , res: Response){
    const {id} = req.params;
    try{  
      const pedidos = await Pedidos.destroy({where: {id_pedido : id}});

      return res.json('Pedidos deletado com sucesso', );
    }catch(e){
      return res.status(500).json({error: "Cannot delete Pedidos"});
    }

  }

async getById(req: Request, res: Response) {
  const {id} = req.params;

  
  try {
    const pedidos = await Pedidos.findByPk(id);
    return res.json(pedidos);
  } catch (e) {
    return res.status(500).json({ error: "Cannot get pedidos" });
  }
}
async getAll(req: Request, res: Response) {
  try {
    const pedidos = await Pedidos.findAll();
    return res.json(pedidos);
  } catch (e) {
    return res.status(500).json({ error: "Cannot get pedidos" });
  }
}

}

export default new PedidosControllers();