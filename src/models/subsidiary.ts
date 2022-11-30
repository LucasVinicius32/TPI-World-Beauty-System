import Customer from "./Clientecustomer";
import Product from "./product";
import { Pedido } from "./pedidos";
export default class Subsidiary {
  public codigo: number;
  public nome: string;
  public endereco: string;
  public Pedido: Pedido[];
  private listaClientes: Customer[];
  private listaClienteGenero: Customer[];
  private listaProdutos: Product[];
  // private listaPedidos: Pedido[];
 
  constructor(codigo: number, nome: string, endereco: string) {
    this.codigo = codigo;
    this.nome = nome;
    this.endereco = endereco;
    this.Pedido = [];
    this.listaClientes = [];
    this.listaClienteGenero = [];
    this.listaProdutos = [];
    // this.listaPedidos = [];
  }

  public addPedido(pedido: Pedido) {
    const pedidos = this.Pedido;
    pedidos.push(pedido);
    this.Pedido = pedidos;
  }
  
  public get getPedidos(): Pedido[] {
    return this.Pedido || [];
  }
  public setPedido(Pedido: Pedido[]) {
    this.Pedido = Pedido;
  }
  
  public get getClienteGenero(): Customer[] {
    return this.listaClienteGenero;
  }
  
  public get getClientes(): Customer[] {
    return this.listaClientes;
  }
  public get getProdutos(): Product[] {
    return this.listaProdutos;
  }

  public addCliente(cliente: Customer) {
    const clientes = this.listaClientes;
    clientes.push(cliente);
    this.listaClientes = clientes;
  }

  public setClientes(clientes: Customer[]) {
    this.listaClientes = clientes;
  }

  public addProduto(produto: Product) {
    const produtos = this.listaProdutos;
    produtos.push(produto);
    this.listaProdutos = produtos;
  }

  public setProdutos(produto: Product[]) {
    this.listaProdutos = produto;
  }
 


}
