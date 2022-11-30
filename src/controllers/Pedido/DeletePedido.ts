import Subsidiary from "../../models/subsidiary";
import Entrada from "../../io/entrada";
import Exclusao from "../exclusao";
import { Pedido } from "../../models/pedidos";

export default class DeletePedido extends Exclusao {
  private entrada: Entrada;
  private filial: Subsidiary;

  constructor(filial: Subsidiary) {
    super();
    this.entrada = new Entrada();
    this.filial = filial;
  }

  public excluir(): void {
    let id = this.entrada.receberNumero(`Por favor, digite o id do pedido que deseja excluir:`);
    const UpdatePedidos: Pedido[] = [];
    this.filial.getPedidos.forEach((pedido) => {
        if (pedido.id !== id) {
            UpdatePedidos.push(pedido);
        }
        console.log("\nPedido Excluído com sucesso!\n");
        })
        this.filial.setPedido(UpdatePedidos);
  }
}
