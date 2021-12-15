import {Aluno} from './FunciAlunoonario.js'

const Coach = class Coach extends Aluno{

    constructor(nome, sobrenome, email, cpf, datanascimento, modulo){
        super(nome, sobrenome, email, cpf, datanascimento)
        this._modulo = modulo
        this._alunos = ["Hudson","Ravi"]
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

export {Coach}