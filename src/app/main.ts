import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`--- Clientes ---`);
    console.log(`\n1 - Cadastrar cliente`);
    console.log(`2 - Atualizar dados do cliente`);
    console.log(`3 - Excluir cliente`);
    console.log(`4 - Listar todos os clientes`);
    console.log(`5 - Listar clientes por gênero`);

    // console.log(`\n--- Produtos ---`);
    // console.log(`\n6 - Cadastrar produto`);
    // console.log(`7 - Atualizar dados do produto`);
    // console.log(`8 - Excluir produto`);
    // console.log(`9 - Listar todos os produtos`);
    // console.log(`10 - Listar produtos por gênero`);

    // console.log(`\n--- Serviços ---`);
    // console.log(`\n11 - Cadastrar serviço`);
    // console.log(`12 - Atualizar dados do serviço`);
    // console.log(`13 - Excluir serviço`);
    // console.log(`14 - Listar todos os serviços`);
    // console.log(`15 - Listar serviços por gênero`);

    // console.log(`\n--- Pedido ---`);
    // console.log(`\n16 - Cadastrar pedido`);
    // console.log(`17 - Excluir pedido`);
    // console.log(`18 - Listar todos os pedidos`);

    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            
            break;
        case 3:
            
            break;
        case 4:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}