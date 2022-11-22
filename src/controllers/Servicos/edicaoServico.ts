import Service from "../../models/service";
import Subsidiary from "../../models/subsidiary";
import Entrada from "../../io/entrada";
import Edicao from "../edicao";

export default class EdicaoServicos extends Edicao {
  private entrada: Entrada;
  private filial: Subsidiary;

  constructor(filial: Subsidiary) {
    super();
    this.entrada = new Entrada();
    this.filial = filial;
  }

  public editar(): void {
    let codigo = this.entrada.receberNumero(`Por favor, escolha um código de serviço:`);
    const updatedService: Service[] = [];
    this.filial.getServicos.forEach((service) => {
      if (service.codigo === codigo) {
        service.nome = this.entrada.receberTexto(`Novo Nome: `);
        service.setValor(this.entrada.receberNumero(`Novo Valor: R$ `));
        console.log('\nAs informações foram atualizadas com sucesso!\n')
      }
      
      updatedService.push(service);

    });
    this.filial.setServicos(updatedService);
  }
}
