import Entrada from "./io/entrada";
import Subsidiary from "./models/subsidiary";

import CadastroCliente from "./controllers/Clientes/cadastroCliente";
import ListagemClientes from "./controllers/Clientes/listagemClientes";
import EdicaoClientes from "./controllers/Clientes/edicaoClientes";
import ExclusaoClientes from "./controllers/Clientes/exclusaoCliente";

import CadastroProduto from "./controllers/Produtos/cadastroProduto";
import ListagemProdutos from "./controllers/Produtos/listagemProdutos";
import EdicaoProdutos from "./controllers/Produtos/edicaoProduto";
import ExclusaoProdutos from "./controllers/Produtos/exclusaoProdutos";

import CadastroPedido from "./controllers/Pedido/CreatePedidos";
import ListaPedido from "./controllers/Pedido/ListaPedidos";
import DeletePedido from "./controllers/Pedido/DeletePedido";

import ListagemGenero from "./controllers/Listagem/listagemGenero";
import ListaConsMore from "./controllers/Listagem/ListaConsMore";
import ProdutoLassLista from "./controllers/Listagem/ProdutoLassLista";
import MoreProdutoLista from "./controllers/Listagem/MoreProdutoLista";

import produtosListagem from "./controllers/ListagemProdutos/produtosListagem";
import ProdutosGenero from "./controllers/ListagemProdutos/generoListagem";


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty\n`);
let empresa = new Subsidiary(
  1,
  "World Beauty Center",
  "São José dos Campos - SP - Praça Monteiro Lobato - Nº 100"
);
let execucao = true;

while (execucao) {
  console.log(`Opções:`);
  console.log("\n-------- CLIENTES --------");
  console.log(`1 - Cadastrar cliente`);
  console.log(`2 - Listar Todos os Clientes`);
  console.log(`3 - Listar de Clientes por Filtros`);
  console.log(`4 - Editar Cliente`);
  console.log(`5 - Excluir Cliente`);

  console.log("\n-------- PRODUTOS --------");
  console.log(`6 - Cadastrar Produtos`);
  console.log(`7 - Listar Todos os Produtos`);
  console.log(`8 - Listar de Produtos por Filtros`);
  console.log(`9 - Editar Produtos`);
  console.log(`10 - Excluir Produtos`);

  console.log("\n-------- PEDIDO --------");
  console.log(`11 - Cadastrar Pedido`);
  console.log(`12 - Excluir Pedido`);
  console.log(`13 - Listar Todos os Pedidos`);
  

  console.log("\n-------- SAIR --------");
  console.log(`0 - Sair\n`);

  let entrada = new Entrada();
  let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

  switch (opcao) {
    case 1:
      let cadastrarCli = new CadastroCliente(empresa);
      cadastrarCli.cadastrar();
      break;
    case 2:
      let listarCli = new ListagemClientes(empresa);
      listarCli.listar();
      break;
    case 3:
      console.log(`
      Que filtro gostaria de aplicar?
      [1] 10 clientes que mais consumiram produtos em quantidade , não em valor
      [2] Classificação por gênero
      [3] 10 clientes que menos consumiram produtos 
      [4] 5 clientes que mais consumiram em valor, não em quantidade
      `);

      opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

      switch (opcao) {
        case 1: 
          let listarConsMore = new ListaConsMore(empresa);
          listarConsMore.listar();
          break

        case 2:
           // Classificação por gênero
          let listarGenero = new ListagemGenero(empresa);
          listarGenero.listar();
          break
        
        case 3:
          // 10 clientes que menos consumiram produtos 
          let ListaMoreProdutos = new MoreProdutoLista(empresa);
          ListaMoreProdutos.listar();
          break
        
        case 4: 
          // 5 clientes que mais consumiram em valor, não em quantidade
          let ListaLassProduto = new ProdutoLassLista(empresa);
          ListaLassProduto.listar();
          break

      default:
        console.log(`Escolha Alguma opção corretamente '='  `);
    }
      break;
    case 4:
      let editarCli = new EdicaoClientes(empresa);
      editarCli.editar();
      break;
    case 5:
      let excluirCli = new ExclusaoClientes(empresa);
      excluirCli.excluir();
      break;

    case 6:
      let cadastrarProd = new CadastroProduto(empresa);
      cadastrarProd.cadastrar();
      break;
    case 7:
      let listarProd = new ListagemProdutos(empresa);
      listarProd.listar();
      break;
    case 8:
      console.log(`
      Que filtro gostaria de aplicar?
      [1] Listagem geral produtos mais consumidos
      [2] Listagem dos produtos mais consumidos por gênero.
      `);
      opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
      switch (opcao) {
        case 1:
          let listarProdutos = new produtosListagem(empresa);
          listarProdutos.listar();
          break

        case 2:
          let listarProdutosGenero = new ProdutosGenero(empresa);
          listarProdutosGenero.listar();

          break

        default:
          console.log(`Escolha Alguma opção corretamente '='  `)
          break
      }
      break
      // let editarProd = new EdicaoProdutos(empresa);
      // editarProd.editar();
    case 9:
      let editarProd = new EdicaoProdutos(empresa);
      editarProd.editar();
      break;
    case 10:
      let excluirProd = new ExclusaoProdutos(empresa);
      excluirProd.excluir();
      break;
    case 11:
      let cadastrarPedido = new CadastroPedido(empresa);
      cadastrarPedido.cadastrar();
      break;
    case 12:
      let excluirPedido = new DeletePedido(empresa);
      excluirPedido.excluir();
      break;
    case 13:
      let listarPedido = new ListaPedido(empresa);
      listarPedido.listar();
      break;
    case 0:
      execucao = false;
      console.log(`Bye!`);
      break;
    default:
      console.log(`Escolha Alguma opção corretamente '=' `);
  }
}
