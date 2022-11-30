import Listagem from "../listagem";
import Subsidiary from "../../models/subsidiary";


export default class produtosListagem extends Listagem{
    // codigo em ts para listar os 10 clientes que mais consumiram en valor , nao em quantidade

    private filial : Subsidiary;

    constructor(filial: Subsidiary) {
        super();
        this.filial = filial;
    }

    public listar(): void {

        let produtos: any = []

        let pedidos = this.filial.getPedidos; // array de pedidos

        for (let i = 0; i < pedidos.length; i++) {
            let pedidoProduto = pedidos[i].product;
            let pedidoqnt = pedidos[i].QntPreco;
      
            produtos.push({IdProduto: pedidoProduto, Quantidade: pedidoqnt});
        }
            //   produtos.push({cpf: , Valor: });
        
        let ordenacao = produtos.sort((a: { qnt: number; }, b: { qnt: number; }) => 
        b.qnt - a.qnt);	
        
       
        console.log(`\nLista de geral de produtos mais consumidos : \n`);

        console.log(ordenacao );
        
    }
  
}