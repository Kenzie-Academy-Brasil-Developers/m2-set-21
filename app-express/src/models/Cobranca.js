const db = require("./../mock/db")

class Cobranca {
    
    constructor({status = false, descricao, valor, cliente}){
        this.id         = this.gerarId() + 1,
        this.status     = status,
        this.descricao  = descricao,
        this.valor      = valor,
        this.cliente    = cliente
    }

    //GERAR ID DE FORMA AUTOMATICA
    gerarId(){

        let maxId = 0

        db.cobrancas.forEach((cobranca)=> {
            if(cobranca.id > maxId){
                maxId = cobranca.id 
            }
        })

        return maxId
    }

    //FAZER O PUSH PARA BANCO DESSE CLIENTE
    save(){
        db.cobrancas.push(this)
    }
}

module.exports = Cobranca