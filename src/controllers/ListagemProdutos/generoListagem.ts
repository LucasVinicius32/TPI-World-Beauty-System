import Listagem from "../listagem";
import Subsidiary from "../../models/subsidiary";
import Entrada from "../../io/entrada";

export default class ProdutosGenero extends Listagem {
    // Listagem dos  produtos mais consumidos por gênero.
    private entrada: Entrada;
    private filial : Subsidiary;
    
    constructor(filial: Subsidiary) {
        super();
        this.entrada = new Entrada();
        this.filial = filial;
    }

    public listar(): void {
        console.log("\n-------- LISTAGEM DE PRODUTOS POR GENERO --------\n");
        let produtos = this.filial.getPedidos;
        let produtosGenero: any = [];
        while (true){
            if(this.entrada.receberTexto(`Informe o Gênero: [M]/[F] `).toLocaleUpperCase() == "M"){
                console.log(`\nProdutos do Gênero Masculino:\n`);
                
                for (let i = 0; i < produtos.length; i++) {
                    if (produtos[i].genero == "M") {
                        produtosGenero.push(produtos[i]);
                    }
            }
            } else{
                console.log(`\nProdutos do Gênero Feminino:\n`);
                for (let i = 0; i < produtos.length; i++) {
                    if (produtos[i].genero == "F") {
                        produtosGenero.push(produtos[i]);
                    }
            }
        }
        let x = this.entrada.receberTexto(`Deseja listar outro genero? [S]/[N] `).toLocaleUpperCase()
        if (x == "N"){
            break;
        }
    }
    }
}