import { Produtos } from "../model/produtos";
import { Request, Response } from "express";

export class ProdutosControllers {

  async create(req: Request, res: Response) {
    try {
  const produtos = await Produtos.create({ ...req.body });

      return res.json(produtos);
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
}

export default new ProdutosControllers();