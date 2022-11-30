import Listagem from "../listagem";
import Subsidiary from "../../models/subsidiary";


export default class MoreProdutoLista extends Listagem{

    private filial : Subsidiary;

    constructor(filial: Subsidiary) {
        super();
        this.filial = filial;
    }

    public listar(): void {

        let consumidores: any = []

        
        let pedidos = this.filial.getPedidos; // array de pedidos

        for (let i = 0; i < pedidos.length; i++) {
            let pedidoCPF = pedidos[i];
            let pedidoqnt = pedidos[i].QntPreco;
      
            consumidores.push({cpf: pedidoCPF, Quantidade: pedidoqnt});
        }

        let ordenacao = consumidores.sort((a: { qnt: number; }, b: { qnt: number; }) => 
        b.qnt - a.qnt);	
        let ordenacaoRevertida = ordenacao.reverse();
        let restricao = ordenacaoRevertida.slice(0, 10);
       
        console.log(`\nLista de 10 Clientes que menos consumiram produto : \n`);
        console.log(restricao );
        
    }
  
}