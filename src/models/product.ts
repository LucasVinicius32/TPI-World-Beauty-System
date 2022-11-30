export default class Product {
  public codigo: number;
  public nome: string;
  private valor_unit: number;
  private genero: string;

  constructor(codigo: number, nome: string, valor_unit: number, genero: string) {
    this.codigo = codigo;
    this.nome = nome;
    this.valor_unit = valor_unit;
    this.genero = genero;
  }

  public get getCodigo(): number {
    return this.codigo;
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

  public get getgenero(): string {
    return this.genero;
  }
  public setgenero(genero: string) {
    this.genero = genero;
  }
}
