import Product from "../../models/product";
import Subsidiary from "../../models/subsidiary";
import Entrada from "../../io/entrada";
import Edicao from "../edicao";

export default class EdicaoProdutos extends Edicao {
  private entrada: Entrada;
  private filial: Subsidiary;

  constructor(filial: Subsidiary) {
    super();
    this.entrada = new Entrada();
    this.filial = filial;
  }

  public editar(): void {
    let codigo = this.entrada.receberNumero(`Por favor, escolha um código de produto:`);
    const updatedProduct: Product[] = [];
    this.filial.getProdutos.forEach((product) => {
      if (product.codigo === codigo) {
        product.nome = this.entrada.receberTexto(`Novo Nome: `);
        product.setValorUnit(this.entrada.receberNumero(`Novo Valor Unitário: R$ `));
        product.setMarca(this.entrada.receberTexto(`Nova Marca `));
        console.log('\nAs informações foram atualizadas com sucesso!\n')
      }
      
      updatedProduct.push(product);

    });
    this.filial.setProdutos(updatedProduct);
  }
}
