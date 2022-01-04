const Funcionario = class Funcionario{  
    constructor(nome, sobrenome, email, cpf, datanascimento){
        this._nome           = nome,
        this._sobrenome      = sobrenome,
        this._email          = email,
        this._datanascimento = datanascimento,
        this._cpf            = cpf,
        this._status         = true
    }

    get nome(){
        return this._nome
    }

    set nome(novoNome){
        this._nome = novoNome
    }

    get sobrenome(){
        return this._sobrenome
    }

    set sobrenome(novoSobrenome){
        this._sobrenome = novoSobrenome
    }

    get email(){
        return this._email
    }

    set email(novoEmail){
        this._email = novoEmail
    }

    get cpf(){
        return this._cpf
    }

    set cpf(novoCpf){
        this._cpf = novoCpf
    }

    set status(novoStatus){
        this._status = novoStatus
    }

    getStatus(){
        if(this._status === true){
            console.log(this._nome+" Funcionário ativo")
        }else{
            console.log("Funcionário inativo")
        }
    }
    
    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }
    
}
export {Funcionario}















