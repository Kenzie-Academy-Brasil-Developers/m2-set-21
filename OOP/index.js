//- NOME: STRING
//- SOBRENOME: STRING
//- EMAIL: STRING
//- DATANASCIMENTO:DATA
//- ID: INT

//CLASSE VAI MODELAR NOSSOS OBJETOS
class Pessoa {  

    constructor(nome, sobrenome, email, datanascimento){
     
        this._nome           = nome,
        this._sobrenome      = sobrenome,
        this._email          = email,
        this._datanascimento = datanascimento,
        this._status         = false
    }

    get nome(){

        return this._nome

    }

    set nome(novoNome){

        this._nome = novoNome
        
    }

}

const pessoa = new Pessoa("Hudson", "Carolino", "hudson@gmail.com", "31101996")

pessoa.nome = "Hudson Gabriel"

console.log(pessoa.nome)














