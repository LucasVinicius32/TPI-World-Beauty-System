export default class Product {
  public codigo: number;
  public nome: string;
  private valor_unit: number;
  private marca: string;

  constructor(codigo: number, nome: string, valor_unit: number, marca: string) {
    this.codigo = codigo;
    this.nome = nome;
    this.valor_unit = valor_unit;
    this.marca = marca;
  }
  public get getNome(): string {
    return this.nome;
  }
  public set setNome(nome: string) {
    this.nome = nome;
  }

  public get getValorUnit(): number {
    return this.valor_unit;
  }
  public setValorUnit(valor_unit: number) {
    this.valor_unit = valor_unit;
  }


  public get getMarca(): string {
    return this.marca;
  }
  public setMarca(marca: string) {
    this.marca = marca;
  }
}
