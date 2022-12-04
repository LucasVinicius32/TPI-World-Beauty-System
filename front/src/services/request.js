import { crud } from "./api";

// cliente 

export async function CreateCliente(cliente){
  
    try {
            const payload = {
            nome: cliente.nome,
            cpf: cliente.cpf,
            rg: cliente.rg,
            telefone: cliente.telefone,
            genero: cliente.genero,
        }
      
         await crud.post('/cliente', payload); 
         alert("Cliente cadastrado! ")
       
    } catch (error) {
        await alert(" Complete os campos corretamente");
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
    try {
        alert('Cliente deletado com sucesso!');
        await crud.delete(`/cliente/${id}`);
    } catch (error) {
        console.error(error);
        alert(" Erro ao deletar cliente");
    }
}

export async function UpdateCliente(cliente,id){
    try {
        console.log(id);
        const payload = {
            nome: cliente.nome,
            cpf: cliente.cpf,
            rg: cliente.rg,
            telefone: cliente.telefone,
            genero: cliente.genero,
        }
        await crud.post(`/clienteUpdate/${id}`, payload);
        alert("Cliente atualizado com sucesso!");
    } catch (error) {
        console.error(error);
        alert(" Verifique os campos corretamente");
    }
}

export async function get10topConsumidores(){
    try {
        const response = await crud.get('/top10consumidores');
        return response.data;
    } catch (error) {
        console.error(error);
        alert(" Erro ao listar cliente");
    }
}

export async function get05topConsumidoresValor(){
    try {
        const response = await crud.get('/top05consumidoresValor');
        return response.data;
    } catch (error) {
        console.error(error);
        alert(" Erro ao listar cliente");
    }
}

export async function gettopLass10consumidores(){
    try {
        const response = await crud.get('/topLass10consumidores');
        return response.data;
    } catch (error) {
        console.error(error);
        alert(" Erro ao listar cliente");
    }
}


// produto
export async function CreateProdutos(Produtos){


try {
  
    const payload = {
        nome: Produtos.nome,
        valor: Produtos.valor,
        marca: Produtos.marca,
        genero: Produtos.genero,
    };
    
    await crud.post('/produtos', payload);
    alert ( " Produto cadastrado com sucesso!");
}
catch (error) {
    console.error(error);
    alert(" Complete os campos corretamente ");
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

export async function UpdateProdutos(Produtos,id){
try {
    const payload = {
        nome: Produtos.nome,
        valor: Produtos.valor,
        marca: Produtos.marca,
        genero: Produtos.genero,
    };
    await crud.post(`/produtoUpdate/${id}`, payload);
} catch (error) {
    console.error(error);
    alert(" Verifique os campos corretamente");
}
}
// pedido
export async function CreatePedido(Pedido){


    try {
            const payload = {
                cpf: Pedido.cpf,
                id_produto: Pedido.id_produto,
                quantidade: Pedido.quantidade,
            }
   
        await crud.post('/pedidos', payload);
        alert ( 'Pedido cadastrado com sucesso!');
    }
    catch (error) {
        console.error(error);
        alert(" Verifique os campos corretamente" );
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

export async function ProdutosMoreConsumidos(){
    try{
        const response = await crud.get('/ProdutosMoreConsumidos');
        return response.data;
    } catch (error){
        console.error(error)
        alert ("Erro ao listar Produtos")
    }
}

export async function updateCliente(cliente){
    try{
        const payload = {
            id_cliente: cliente.id_cliente,
            nome: cliente.nome,
            cpf: cliente.cpf,
            rg:cliente.rg,
            telefone:cliente.telefone,
            genero: cliente.genero,
        }
    } catch(error){
        console.error(error);
        alert("Verifique os campos corretamente ")
    }

}




