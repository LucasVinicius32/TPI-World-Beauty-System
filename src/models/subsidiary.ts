import Customer from "./Clientecustomer";
import Product from "./product";
import Service from "./service";

export default class Subsidiary {
  public codigo: number;
  public nome: string;
  public endereco: string;
  private listaClientes: Customer[];
  private listaClienteGenero: Customer[];
  private listaProdutos: Product[];
  private listaServicos: Service[];

  constructor(codigo: number, nome: string, endereco: string) {
    this.codigo = codigo;
    this.nome = nome;
    this.endereco = endereco;
    this.listaClientes = [];
    this.listaClienteGenero = [];
    this.listaProdutos = [];
    this.listaServicos = [];
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
  public get getServicos(): Service[] {
    return this.listaServicos;
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

  public addServico(servico: Service) {
    const servicos = this.listaServicos;
    servicos.push(servico);
    this.listaServicos = servicos;
  }

  public setServicos(servico: Service[]) {
    this.listaServicos = servico;
  }
}
