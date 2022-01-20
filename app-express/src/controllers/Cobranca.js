const db = require("./../mock/db")
const Cobranca = require("./../models/Cobranca")

class CobrancaController {

    static
    retornarCobrancas(){
        return db.cobrancas
    }

    static
    cadastrarCobrancas(dataForm){
        
        const novoCobranca = new Cobranca(dataForm)
        novoCobranca.save()

        return novoCobranca
        
    }

}
module.exports = CobrancaController