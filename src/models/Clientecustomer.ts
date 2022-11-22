export default class Customer {
    public nome: string
    private CPF: string //Idenficador
    private RG: string
    private telefone: number
    private genero : string

    constructor(nome: string, cpf: string, rg: string, telefone: number , genero: string) {
        this.nome = nome
        this.CPF = cpf
        this.RG = rg
        this.telefone = telefone
        this.genero = genero
    }

    public get getCPF(): string {
        return this.CPF
    }
    public get getRG(): string {
        return this.RG
    }
    public get getTelefone(): number{
        return this.telefone
    }
    public get getGenero(): string {
        return this.genero
    }
    public setCPF(cpf: string) {
        this.CPF = cpf
    }

    public setRG(rg: string) {
        this.RG = rg
    }

    public setTelefone(telefone: number) {
        this.telefone = telefone
    }
}