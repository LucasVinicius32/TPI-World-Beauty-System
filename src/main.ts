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

import CadastroServico from "./controllers/Servicos/cadastrarServico";
import ListagemServicos from "./controllers/Servicos/listagemServicos";
import EdicaoServicos from "./controllers/Servicos/edicaoServico";
import ExclusaoServicos from "./controllers/Servicos/exclusaoServicos";

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
  console.log(`333 - Lista de Clientes por Gênero`);
  console.log(`3 - Editar Cliente`);
  console.log(`4 - Excluir Cliente`);

  console.log("\n-------- PRODUTOS --------");
  console.log(`5 - Cadastrar Produtos`);
  console.log(`6 - Listar Todos os Produtos`);
  console.log(`7 - Editar Produtos`);
  console.log(`8 - Excluir Produtos`);

  console.log("\n-------- SERVIÇOS --------");
  console.log(`9- Cadastrar Serviços`);
  console.log(`10 - Listar Todos os Serviços`);
  console.log(`11 - Editar Serviços`);
  console.log(`12 - Excluir Serviços`);

  console.log("\n-------- PEDIDO --------");
  console.log(`13 - Cadastrar Pedido`);
  console.log(`14 - Excluir Pedido`);
  console.log(`15 - Listar Todos os Pedidos`);
  

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
      let editarCli = new EdicaoClientes(empresa);
      editarCli.editar();
      break;
    case 4:
      let excluirCli = new ExclusaoClientes(empresa);
      excluirCli.excluir();
      break;

    case 5:
      let cadastrarProd = new CadastroProduto(empresa);
      cadastrarProd.cadastrar();
      break;
    case 6:
      let listarProd = new ListagemProdutos(empresa);
      listarProd.listar();
      break;
    case 7:
      let editarProd = new EdicaoProdutos(empresa);
      editarProd.editar();
      break;
    case 8:
      let excluirProd = new ExclusaoProdutos(empresa);
      excluirProd.excluir();
      break;

    case 9:
      let cadastrarServ = new CadastroServico(empresa);
      cadastrarServ.cadastrar();
      break;
    case 10:
      let listarServ = new ListagemServicos(empresa);
      listarServ.listar();
      break;
    case 11:
      let editarServ = new EdicaoServicos(empresa);
      editarServ.editar();
      break;
    case 12:
      let excluirServ = new ExclusaoServicos(empresa);
      excluirServ.excluir();
      break;
    case 13:
      let cadastrarPedido = new CadastroPedido(empresa);
      cadastrarPedido.cadastrar();
      break;
    case 14:
      let excluirPedido = new ExclusaoPedido(empresa);
      excluirPedido.excluir();
      break;
    case 15:
      let listarPedido = new ListagemPedido(empresa);
      listarPedido.listar();
    case 0:
      execucao = false;
      console.log(`Bye!`);
      break;
    default:
      console.log(`Escolha Alguma opção corretamente '=' `);
  }
}
