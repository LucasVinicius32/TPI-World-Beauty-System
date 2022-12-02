import { Cliente } from "../model/cliente";
import { Request, Response } from "express";

export class ClienteControllers {

  async create(req: Request, res: Response) {
    try {
  const Clientes = await Cliente.create({ ...req.body });

      return res.json(Clientes);
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
    console.log(id);
    
    try {
      const Clientes = await Cliente.update
      ({ ...req.body }, {where: {id_cliente : id}});
      return res.json('Cliente atualizado com sucesso');
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


}

export default new ClienteControllers();