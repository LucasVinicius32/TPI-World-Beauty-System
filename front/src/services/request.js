import { crud } from "./api";

// cliente 

export async function CreateCliente(cliente){
  
    try {
        const payload = {
            nome: cliente.nome,
            cpf: cliente.cpf,
            rg: cliente.rg,
            telefone: cliente.telefone,
            genero: 'masculino',
        };
        await crud.post('/cliente', payload);
        alert('Cliente cadastrado com sucesso!');
    } catch (error) {
        console.error(error);
        alert(" Erro ao cadastrar cliente");
    }
    
}
export async function getAllCliente(){
    try {
        const response = await crud.get('/clientegetall');
     
        return response.data;
    } catch (error) {
        console.error(error);
        alert(" Erro ao listar cliente");
    }
}

export async function DeleteCliente(id){
    console.log(id);
    try {
        await crud.delete(`/cliente/${id}`);
        alert('Cliente deletado com sucesso!');
    } catch (error) {
        console.error(error);
        alert(" Erro ao deletar cliente");
    }
}
// produto
export async function CreateProdutos(Produtos){


try {
    const payload = {
        nome: Produtos.nome,
        valor: Produtos.valor,
        marca: Produtos.marca,
    };
    await crud.post('/produtos', payload);
}
catch (error) {
    console.error(error);
    alert(" Erro ao cadastrar produto");
}
}

export async function getAllProdutos(){
try {
    const response = await crud.get('/produto/getAll');
    return response.data;
} catch (error) {
    console.error(error);
    alert(" Erro ao listar produto");
}
}

export async function DeleteProdutos(id){
try {
    await crud.delete(`/produto/${id}`);
    alert('Produto deletado com sucesso!');
} catch (error) {
    console.error(error);
    alert(" Erro ao deletar produto");
}
}
// pedido
export async function CreatePedido(Pedido){


    try {
        const payload = {
            cpf: Pedido.cpf,
            id_produto: Pedido.id_produto,
            quantidade: Pedido.quantidade,
        };
        await crud.post('/pedidos', payload);
   
    }
    catch (error) {
        console.error(error);
        alert(" Erro ao cadastrar pedido" );
    }
}

export async function DeletePedidos(id){
    try {
        await crud.delete(`/pedidos/${id}`);
        alert('Pedido deletado com sucesso!');
    } catch (error) {
        console.error(error);
        alert(" Erro ao deletar pedido");
    }
}

export async function getAllPedidos(){
    try {
        const response = await crud.get('/pedidos/getAll');
        return response.data;
    } catch (error) {
        console.error(error);
        alert(" Erro ao listar pedido");
    }
}




