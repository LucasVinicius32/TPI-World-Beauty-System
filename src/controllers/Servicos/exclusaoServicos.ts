import Service from "../../models/service";
import Subsidiary from "../../models/subsidiary";
import Entrada from "../../io/entrada";
import Exclusao from "../exclusao";

export default class ExclusaoServicos extends Exclusao {
  private entrada: Entrada;
  private filial: Subsidiary;

  constructor(filial: Subsidiary) {
    super();
    this.entrada = new Entrada();
    this.filial = filial;
  }

  public excluir(): void {
    let codigo = this.entrada.receberNumero(
      `Por favor, escolha um codigo de serviço:`
    );
    const updatedService: Service[] = [];
    this.filial.getServicos.forEach((service) => {
      if (service.codigo !== codigo) {
        updatedService.push(service);
      }
      console.log("\nServiço Excluído com sucesso!\n");
    });
    this.filial.setServicos(updatedService);
  }
}
