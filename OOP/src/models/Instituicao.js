const Instituicao = class Instituicao {
    constructor(nome, modulos, cursos){
        this._nome      = nome,
        this._modulos   = modulos,
        this._cursos    = cursos,
        this._instrutores = []
    }

    get nome(){
        return this._nome
    }

    set nome(novoNome){
        this._nome = novoNome
    }

    get modulos(){
        return this._modulos
    }

    set modulos(NovosModulos){
        this._modulos = NovosModulos
    }

    addNovoInstrutor(instrutor){
        this._instrutores.push(instrutor)
        this.addInstrutorModulo(instrutor)
    }

    addInstrutorModulo(objInstrutor){
        
        const {moduloInstrutor} = objInstrutor

        const moduloFiltrado  = this._modulos.find(function({nome}){
            nome == moduloInstrutor
        })
       
        //
        moduloFiltrado.instrutor  =  objInstrutor
        console.log(moduloFiltrado)
    }
}

export {
    Instituicao
}