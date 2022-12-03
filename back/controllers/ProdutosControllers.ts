import { Produtos } from "../model/produtos";
import { Request, Response } from "express";
import { Pedidos } from "../model/Pedidos";

export class ProdutosControllers {

  async create(req: Request, res: Response) {
    try {
      var condicao = false
      const response = await Produtos.findAll()
      for (let i = 0; i < response.length; i++) {
          if (response[i].getDataValue('nome').toLowerCase() === req.body.nome.toLowerCase()) {
            var condicao = true
            return res.status(500).json({ error: "Já existe um nome cadastrado" });
          }
      }
      if(condicao == false){  
        const produtos = await Produtos.create({ ...req.body});
        return res.json("Cadastrado!!")
    }
    } catch (e) {
      return res.status(500).json({ error: "Cannot create Produtos" });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const produtos = await Produtos.findByPk(req.params.id);

      return res.json(produtos);
    } catch (e) {
      return res.status(500).json({ error: "Cannot get Produtos" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const produtos = await Produtos.findByPk(req.params.id);

      if (!produtos) {
        return res.status(404).json({ error: "Produtos not found" });
      }

      await produtos.destroy();

      return res.json( "Produtos deleted" );
    } catch (e) {
      return res.status(500).json({ error: "Cannot delete Produtos" });
    }
  }

  async update(req: Request, res: Response) {

    try {
      const produtos = await Produtos.findByPk(req.params.id);

      if (!produtos) {
        return res.status(404).json({ error: "Produtos not found" });
      }

      await produtos.update({ ...req.body });

      return res.json(produtos);
    } catch (e) {
      return res.status(500).json({ error: "Cannot update Produtos" });
    }

}
async getAll(req: Request, res: Response) {
  try {
    const produtos = await Produtos.findAll();
    return res.json(produtos);
  } catch (e) {
    return res.status(500).json({ error: "Cannot get Produtos" });
  }
}

async ProdutosMoreConsumidos (req: Request , res : Response){

  try{
    const arrayprodutos = await Produtos.findAll()
    const arraypedidos = await Pedidos.findAll()
    const produtosConsumidos :any = [];
    var qntConsumida = 0

    for(let x = 0; x < arrayprodutos.length; x++){
      for(let y = 0 ; y < arraypedidos.length; y++){
        if (arrayprodutos[x].getDataValue('id_produto') == arraypedidos[y].getDataValue('id_produto') ){
          qntConsumida += arraypedidos[y].getDataValue('quantidade');
        }
      }
      produtosConsumidos.push({produto: arrayprodutos[x] , qntConsumida: qntConsumida})
      qntConsumida = 0
    }
    let ordenacao = produtosConsumidos.sort((a:any, b:any) => {
      return b.qntConsumida - a.qntConsumida;
    });
    return res.json(ordenacao.slice(0,10));

  } catch(e){
    return res.status(500).json({error: "cannor Get Produtos"})
  }
}
}

export default new ProdutosControllers();