const db = require("./../mock/db")
const Cliente = require("./../models/Cliente")

class ClienteController {

    static
    retornarClientes(){
        return db.clientes
    }

    static
    cadastrarCliente(dataForm){
        
        const novoCliente = new Cliente(dataForm)
        novoCliente.save()

        return novoCliente
        
    }

}

module.exports = ClienteController