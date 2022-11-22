import Cliente from "../../models/Clientecustomer";
import Subsidiary from "../../models/subsidiary";
import Listagem from ".././listagem";

export default class ListagemClientes extends Listagem {
  private filial: Subsidiary;
  constructor(filial: Subsidiary) {
    super();
    this.filial = filial;
  }
  public listar(): void {
    console.log(`\nLista de Todos os Clientes: \n`);
    this.filial.getClientes.forEach((cliente) => {
      console.log(`Nome: ` + cliente.nome);
      console.log(`CPF: ` + cliente.getCPF);
      console.log(`RG: ` + cliente.getRG);
      console.log(`Telefone: ` + cliente.getTelefone);
      console.log(`Gênero: ` + `[` + cliente.getGenero + `]`);
      console.log(`--------------------------------------`);
    });
    console.log(`\n`);
  }
}
