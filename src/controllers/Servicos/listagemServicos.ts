import Servico from "../../models/service";
import Subsidiary from "../../models/subsidiary";
import Listagem from ".././listagem";

export default class ListagemServicos extends Listagem {
  private filial: Subsidiary;
  constructor(filial: Subsidiary) {
    super();
    this.filial = filial;
  }
  public listar(): void {
    console.log(`\nLista de Todos os Serviços: \n`);
    this.filial.getServicos.forEach((servico) => {
      console.log(`Codigo: ` + servico.codigo);
      console.log(`Nome: ` + servico.nome);
      console.log(`Valor: ` + servico.getValor);

      console.log(`--------------------------------------`);
    });
    console.log(`\n`);
  }
}
