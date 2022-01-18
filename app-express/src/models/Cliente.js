const db = require("./../mock/db")

class Cliente {
    
    constructor({nome,cpf, telefone}){
        this.id         = this.gerarId() + 1,
        this.nome       = nome,
        this.cpf        = cpf,
        this.telefone   = telefone
    }

    //GERAR ID DE FORMA AUTOMATICA
    gerarId(){

        let maxId = 0

        db.clientes.forEach((cliente)=> {
            if(cliente.id > maxId){
                maxId = cliente.id 
            }
        })

        return maxId
    }

    //FAZER O PUSH PARA BANCO DESSE CLIENTE
    save(){
        db.clientes.push(this)
    }
}

module.exports = Cliente