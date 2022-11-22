import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Delete from "./delete";

export default class deleteCliente extends Delete {
    public input: Entrada;

    constructor() {
        super();
        this.input = new Entrada();
    }

    protected deleteConfirm(cliente : Cliente , cpf: number): void {
 
    }