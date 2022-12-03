import { Cliente } from "../model/cliente";
import { Pedidos } from "../model/Pedidos";
import { Request, Response } from "express";

export class ClienteControllers {

  async create(req: Request, res: Response) {
    try { 
      var condicao = false
      const allclientes = await Cliente.findAll()
      for(let i = 0 ; i < allclientes.length;i++){
        if (allclientes[i].getDataValue('cpf') == req.body.cpf){
          var condicao = true
          return res.status(500).json({ error: "Já existe CPF cadastrado" });
        }
      }
  
      console.log(condicao);
      
      if(condicao == false){  
        const Clientes = await Cliente.create({ ...req.body });
        return res.json("Cadastrado!!")
    }
    } catch (e) {
      return res.status(500).json({ error: "Cannot create Clientes" });
    }
  }

  async delete(req: Request , res: Response){
    const {id} = req.params;
    try{  
      const Clientes = await Cliente.destroy({where: {id_cliente : id}});
      return res.json('Cliente deletado com sucesso', );
    }catch(e){
      return res.status(500).json({error: "Cannot delete Clientes"});
    }

  }

  async update(req: Request, res: Response) {
    const {id} = req.params;    
    try {
      var condicao = false
      const allclientes = await Cliente.findAll()
      for(let i = 0 ; i < allclientes.length;i++){
            if (allclientes[i].getDataValue('cpf') == req.body.cpf){
              var condicao = true
              return res.status(500).json({ error: "Já existe CPF cadastrado" });
            }
          }
          if( condicao == false){
            const Clientes = await Cliente.update
            ({ ...req.body }, {where: {id_cliente : id}});
            return res.json('Cliente atualizado com sucesso');
          }
    } catch (e) {
      return res.status(500).json({ error: "Cannot update Clientes" });
    }
  

};
async getById(req: Request, res: Response) {
  const {id} = req.params;
  try {
    const Clientes = await Cliente.findByPk(id);
    return res.json(Clientes);
  } catch (e) {
    return res.status(500).json({ error: "Cannot get Clientes" });
  }
}

async getAll (req: Request, res: Response) {
  try {
    const Clientes = await Cliente.findAll();
    return res.json(Clientes);
  } catch (e) {
    return res.status(500).json({ error: "Cannot get Clientes" });
  }
}

async top10consumidores(req: Request, res: Response) {

  try{
    const arrayCliente = await Cliente.findAll()
    const arraypedidos = await Pedidos.findAll()
    const consumidor :any = [];
    var qntConsumida = 0;
    
    for (let x = 0 ; x < arrayCliente.length; x++){
      for (let y = 0 ; y < arraypedidos.length; y++){
        if (arrayCliente[x].getDataValue('id_cliente') == arraypedidos[y].getDataValue('id_cliente')){
          qntConsumida += arraypedidos[y].getDataValue('quantidade');
        }
      }
      consumidor.push({cliente: arrayCliente[x], qntConsumida: qntConsumida});
      qntConsumida = 0;
        
      }
      let ordenacao = consumidor.sort((a:any, b:any) => {
        return b.qntConsumida - a.qntConsumida;
      });
      return res.json(ordenacao.slice(0,10));
  } catch (e) {
    return res.status(500).json({ error: "Cannot get Clientes" });
  }
}

async topLass10consumidores(req: Request, res: Response) {
  // codigo em js para listar os 10 clientes que mais consumiram en quantidade , nao em valor
  try{
    const arrayCliente = await Cliente.findAll()
    const arraypedidos = await Pedidos.findAll()
    const consumidor :any = [];
    var qntConsumida = 0;
    
    for (let x = 0 ; x < arrayCliente.length; x++){
      for (let y = 0 ; y < arraypedidos.length; y++){
        if (arrayCliente[x].getDataValue('id_cliente') == arraypedidos[y].getDataValue('id_cliente') ){
          qntConsumida += arraypedidos[y].getDataValue('quantidade');
      
        }
      }
      consumidor.push({cliente: arrayCliente[x], qntConsumida: qntConsumida});
      qntConsumida = 0;
        
      }
      let ordenacao = consumidor.sort((a:any, b:any) => {
        return b.qntConsumida - a.qntConsumida;
      });
      let reverse = ordenacao.reverse();

      return res.json(reverse.slice(0,10));
  } catch (e) {
    return res.status(500).json({ error: "Cannot get Clientes" });
  }
}

async top05consumidoresValor(req: Request, res: Response) {

  try{
    const arrayCliente = await Cliente.findAll()
    const arraypedidos = await Pedidos.findAll()
    const consumidor :any = [];
    var qntConsumida = 0;
    
    for (let x = 0 ; x < arrayCliente.length; x++){
      for (let y = 0 ; y < arraypedidos.length; y++){
        if (arrayCliente[x].getDataValue('id_cliente') == arraypedidos[y].getDataValue('id_cliente')){
          qntConsumida += arraypedidos[y].getDataValue('valor_total');
        }
      }
      consumidor.push({cliente: arrayCliente[x], valor: qntConsumida});
      qntConsumida = 0;
        
      }
      let ordenacao = consumidor.sort((a:any, b:any) => {
        return b.valor - a.valor;
      });
      return res.json(ordenacao.slice(0,5));
  } catch (e) {
    return res.status(500).json({ error: "Cannot get Clientes" });
  }
}


}

export default new ClienteControllers();