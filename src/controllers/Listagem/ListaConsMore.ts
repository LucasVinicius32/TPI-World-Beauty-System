import Listagem from "../listagem";
import Subsidiary from "../../models/subsidiary";


export default class ListaConsMore extends Listagem{
    // codigo em ts para listar os 10 clientes que mais consumiram en quantidade , nao em valor

    private filial : Subsidiary;

    constructor(filial: Subsidiary) {
        super();
        this.filial = filial;
    }

    public listar(): void {

        let consumidores: any = []

        let clientes = this.filial.getClientes; // array de clientes
        let pedidos = this.filial.getPedidos; // array de pedidos

        for (let i = 0; i < clientes.length; i++) {
           var cpfComparado = clientes[i].getCPF;
           var qntConsumida = 0; 
           for (let j = 0; j < pedidos.length; j++) {
               if (pedidos[j].client == cpfComparado){
                   qntConsumida += pedidos[j].QntPreco;
               }
           }
              consumidores.push({cpf: cpfComparado, quantidade: qntConsumida});
        }
        let ordenacao = consumidores.sort((a: { qnt: number; }, b: { qnt: number; }) => 
        b.qnt - a.qnt);	

        let restricao = ordenacao.slice(0, 10);
       
        console.log(`\nLista de 10 Clientes que mais consumiram: \n`);

        console.log(restricao);
        
    }
  
}