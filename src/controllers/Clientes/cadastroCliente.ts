import Entrada from "../../io/entrada";
import Customer from "../../models/Clientecustomer";
import Cadastro from "../cadastro";
import Subsidiary from "../../models/subsidiary";

export default class CadastroCliente extends Cadastro {
  private entrada: Entrada;
  private filial: Subsidiary;

  constructor(filial: Subsidiary) {
    super();
    this.entrada = new Entrada();
    this.filial = filial;
  }

  public cadastrar(): void {
    console.log(`\nInício do Cadastro do Cliente`);
    let nome = this.entrada.receberTexto(`Informe o Nome do Cliente: `);
    let CPF = this.entrada.receberTexto(`Informe o CPF: `);
    let RG = this.entrada.receberTexto(`Informe o RG: `);
    let telefone = this.entrada.receberNumero(`Informe o Telefone: `);
    let genero = this.entrada.receberTexto(`Informe o Gênero: [M]/[F] `).toLocaleUpperCase();
    

    let cliente = new Customer(nome, CPF, RG, telefone , genero);
    this.filial.addCliente(cliente);
    console.log(`\nCadastro concluído!)\n`);
  }
}
