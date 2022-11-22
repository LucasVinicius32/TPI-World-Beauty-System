export default class Service {
  public codigo: number;
  public nome: string;
  private valor: number;

  constructor(codigo: number, nome: string, valor: number) {
    this.codigo = codigo;
    this.nome = nome;
    this.valor = valor;
  }

  public get getValor(): number {
    return this.valor;
  }

  public setValor(valor: number) {
    this.valor = valor;
  }
}
