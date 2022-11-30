import Product from "../../models/product";
import Subsidiary from "../../models/subsidiary";
import Entrada from "../../io/entrada";
import Exclusao from "../exclusao";

export default class ExclusaoProdutos extends Exclusao {
  private entrada: Entrada;
  private filial: Subsidiary;

  constructor(filial: Subsidiary) {
    super();
    this.entrada = new Entrada();
    this.filial = filial;
  }

  public excluir(): void {
    let codigo = this.entrada.receberNumero(
      `Por favor, digite o código do produto para ser excluído:`
    );
    const updatedProduct: Product[] = [];
    this.filial.getProdutos.forEach((product) => {
      if (product.codigo !== codigo) {
        updatedProduct.push(product);
      }
      console.log("\nProduto Excluído com sucesso!\n");
    });
    this.filial.setProdutos(updatedProduct);
  }
}
