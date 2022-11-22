import Entrada from "../../io/entrada";
import Service from "../../models/service";
import Cadastro from "../cadastro";
import Subsidiary from "../../models/subsidiary";

export default class CadastroServico extends Cadastro {
  private entrada: Entrada;
  private filial: Subsidiary;

  constructor(filial: Subsidiary) {
    super();
    this.entrada = new Entrada();
    this.filial = filial;
  }

  public cadastrar(): void {
    console.log(`\nInício do Cadastro de Produtos`);
    let codigo = this.entrada.receberNumero(`Informe o Código do Serviços: `);
    let nome = this.entrada.receberTexto(`Informe o Nome: `);
    let valor = this.entrada.receberNumero(`Informe Valor: R$ `);

    let servico = new Service(codigo, nome, valor);
    this.filial.addServico(servico);
    console.log(`\nCadastro concluído!)\n`);
  }
}
