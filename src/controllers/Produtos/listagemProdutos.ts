import Produto from "../../models/product";
import Subsidiary from "../../models/subsidiary";
import Listagem from "../listagem";

export default class ListagemProdutos extends Listagem {
  private filial: Subsidiary;
  constructor(filial: Subsidiary) {
    super();
    this.filial = filial;
  }
  public listar(): void {
    console.log(`\nLista de Todos os Produtos: \n`);
    this.filial.getProdutos.forEach((produto) => {
      console.log(`Codigo: ` + produto.codigo);
      console.log(`Nome: ` + produto.nome);
      console.log(`Valor Unitário: R$` + produto.getValorUnit);
      console.log(`Marca: ` + produto.getMarca);
      console.log(`--------------------------------------`);
    });
    console.log(`\n`);
  }
}
