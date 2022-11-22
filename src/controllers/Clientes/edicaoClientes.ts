import Customer from "../../models/Clientecustomer";
import Subsidiary from "../../models/subsidiary";
import Entrada from "../../io/entrada";
import Edicao from "../edicao";

export default class EdicaoClientes extends Edicao {
  private entrada: Entrada;
  private filial: Subsidiary;

  constructor(filial: Subsidiary) {
    super();
    this.entrada = new Entrada();
    this.filial = filial;
  }

  public editar(): void {
    let cpf = this.entrada.receberTexto(`Por favor, escolha um CPF:`);
    const updatedCustomers: Customer[] = [];
    this.filial.getClientes.map((customer) => {
      if (customer.getCPF === cpf) {
        customer.nome = this.entrada.receberTexto(`Novo Nome: `);
        customer.setRG(this.entrada.receberTexto(`Novo RG: `));
        customer.setTelefone(this.entrada.receberNumero(`Novo Telefone: `));
        console.log("\nAs informações foram atualizadas com sucesso!\n");
      }
      updatedCustomers.push(customer);
    });

    this.filial.setClientes(updatedCustomers);
  }
}
