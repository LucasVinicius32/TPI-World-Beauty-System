
import Listagem from "../listagem";
import Subsidiary from "../../models/subsidiary";
import Entrada from "../../io/entrada";
export default class ListagemGenero extends Listagem {
    // codigo em ts para listar os clientes por genero

    private entrada: Entrada;
    private filial : Subsidiary;

    constructor(filial: Subsidiary) {
        super();
        this.entrada = new Entrada();
        this.filial = filial;
    }

    public listar(): void {
        console.log("\n-------- LISTAGEM DE CLIENTES POR GENERO --------\n");
        let clientes = this.filial.getClientes;
    while (true){
        if(this.entrada.receberTexto(`Informe o Gênero: [M]/[F] `).toLocaleUpperCase() == "M"){
            console.log(`\nClientes do Gênero Masculino:\n`);
            
            for (let i = 0; i < clientes.length; i++) {
                if (clientes[i].getGenero == "M") {
                 console.log(clientes[i]);
                 }
        }
        } else{
            console.log(`\nClientes do Gênero Feminino:\n`);
            for (let i = 0; i < clientes.length; i++) {
                if (clientes[i].getGenero == "F") {
                 console.log(clientes[i]);
                 }
        }
    }
    let x = this.entrada.receberTexto(`Deseja listar outro genero? [S]/[N] `).toLocaleUpperCase()
    if (x == "N"){
        break;
    }
}
}}