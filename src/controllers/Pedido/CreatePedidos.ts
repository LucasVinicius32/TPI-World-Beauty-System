import Entrada from "../../io/entrada";
import Cadastro from "../cadastro";
import { Pedido } from "../../models/pedidos";
import Subsidiary from "../../models/subsidiary";


export default class CadastroPedido extends Cadastro {
    private entrada: Entrada;
    private filial : Subsidiary;


    constructor(filial: Subsidiary ) {
        super();
        this.entrada = new Entrada();
        this.filial = filial;
     
    }

    public cadastrar(): void {
        console.log(` \n Início do Cadastro do Pedido `);
        let produtos = this.filial.getProdutos
        while(true){
            // let id = this.entrada.receberNumero(`Informe o ID do Pedido: `);
            let client = this.entrada.receberTexto(`Informe o CPF do Cliente: `);
            let product = this.entrada.receberNumero(`Informe o ID do Produto: `);
            let QntPreco = this.entrada.receberNumero(`Informe a Quantidade: `);

          for(let x = 0 ; x < this.filial.getProdutos.length ; x++){
            if(produtos[x].getCodigo == product){
                let valor = produtos[x].getValorUnit
                let valorTotal = valor * QntPreco
                let pedido = new Pedido(client, product, QntPreco, valorTotal);
                this.filial.addPedido(pedido);
                console.log(`\nCadastro concluído!)\n`);
            }
          }
            let continuar = this.entrada.receberTexto(`Deseja continuar? (S/N) `).toLocaleUpperCase();
            if(continuar == "N"){
                break;
            }
        }
        
    }
}