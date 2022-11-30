
export class Pedido {
  public id: number;
  public client: string;
  public product: number;
  public QntPreco: number;
  public Valor: number;
  public genero: string;
  // sobrecarga de método (variações do construtor)
  constructor(
    client: string,
    product: number,
    QntPreco: number,
    Valor: number,
    genero: string

  ){
    this.client = client
    this.product = product
    this.QntPreco = QntPreco
    this.Valor = Valor
    this.genero = genero
    this.id = Math.random();
  };
//   constructor( client: string, product: number, QntPreco: number , Valor: number);
// //   constructor(client: Client, service?: Service);
//   constructor(
  
//     client: string,
//     product?: number,
//     QntPreco?: number,
//     Valor?: number,
  //  {
    // this.id = Math.random();
    // this.client = client;
    

  //   if (product !== undefined) {
  //     this.product = product;
  //     this.QntPreco = QntPreco;
  //     this.Valor = Valor;
  //   }

  // }
  public get getID(): Number {
    return this.id
}

public get getClient(): string {
  return this.client
}
}