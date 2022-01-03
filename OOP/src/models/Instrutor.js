import {Funcionario} from './Funcionario.js'

const Instrutor = class Instrutor extends Funcionario{

    constructor(nome, sobrenome, email, cpf, datanascimento, modulo){
        super(nome, sobrenome, email, cpf, datanascimento)
        this._modulo = modulo
    }

    set modulo(novoModulo){
        this._modulo = novoModulo
    }
    
    get modulo(){
        return this._modulo
    }

    nomeCompletoInstrutor(){
       const apresentacao = super.nomeCompleto()
        console.log(apresentacao + "- Instrutor")
    }
} 

export {Instrutor}