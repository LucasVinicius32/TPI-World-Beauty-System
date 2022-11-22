import Customer from "../../models/Clientecustomer";
import Subsidiary from "../../models/subsidiary";
import Entrada from "../../io/entrada";
import Exclusao from "../exclusao";

export default class ExclusaoClientes extends Exclusao {
  private entrada: Entrada;
  private filial: Subsidiary;

  constructor(filial: Subsidiary) {
    super();
    this.entrada = new Entrada();
    this.filial = filial;
  }

  public excluir(): void {
    let cpf = this.entrada.receberTexto(`Por favor, escolha um CPF:`);
    const updatedCustomers: Customer[] = [];
    this.filial.getClientes.forEach((customer) => {
      if (customer.getCPF !== cpf) {
        updatedCustomers.push(customer);
      }
      console.log("\nCliente Excluído com sucesso!\n");
    });
    this.filial.setClientes(updatedCustomers);
  }
}
