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

    static
    retornarCliente(id){
        return db.clientes.find((cliente)=> cliente.id == id)
    }

    static
    deletarCliente(id){
        const clienteIndex = db.clientes.findIndex((cliente)=> cliente.id == id)
        console.log(clienteIndex)

        if( clienteIndex > -1){
            db.clientes.splice(clienteIndex, 1)
            
            return true
        }
      
    }



}
module.exports = ClienteController