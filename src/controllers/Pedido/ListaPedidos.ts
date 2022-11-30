import Listagem from "../listagem";
import Subsidiary from "../../models/subsidiary";

export default class ListaPedido extends Listagem {
    // codigo em ts para listar os clientes por genero

    private filial : Subsidiary;

    constructor(filial: Subsidiary) {
        super();
        this.filial = filial;
    }

    public listar(): void {
    console.log(`\nLista de Todos os Pedidos: \n`);
    this.filial.getPedidos.forEach((pedido) => {
      console.log(`Codigo: ` + pedido.id);
      console.log(`CPF do Cliente: ` + pedido.client);
      console.log(`ID do produto: ` + pedido.product);
      console.log(`Quantidade: ` + pedido.QntPreco);
      console.log(`Valor total do pedido : ` + pedido.Valor);
      console.log(`--------------------------------------`);
    });
    console.log(`\n`);
       
}

}