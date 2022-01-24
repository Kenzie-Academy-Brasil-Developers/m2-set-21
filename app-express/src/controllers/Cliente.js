const db = require("./../mock/db")
const { writeFileSync, readFileSync } = require("fs")

const Cliente = require("./../models/Cliente")


//TROCAR O TIPO DE BANCO DE DADOS  (db.json) ***
//RECUPERAR ESSE ARQUIVO  **
//LER PARA RECUPERAR AS INFORMAÇÕES ** 
//ESCREVER SALVAR AS INFORMAÇÕES

class ClienteController {

    static
    retornarClientes(){

        const dataRead = readFileSync("./src/mock/dbClientes.json")
      
        if (dataRead.length !== 0) {
            
            const obj = JSON.parse(dataRead) 

          return obj
            
        }else{

            return []
        }

    }

    static
    cadastrarCliente(dataForm){

            //MODELANDO OBEJTO, QUE VEM DO FORM
            const novoCliente = new Cliente(dataForm)

            //ATRIBUIR ID PARA CLIENTE
            novoCliente.id = this.gerarId() + 1

            //LENDO O ARQUIVO
            const dataRead = this.retornarClientes()

            //ADICIONANDO NOVO OBJETO/ TRATANDO UM NOVO ARRAY DE DADOS
            const newdb = [...dataRead, novoCliente]
            
            //ÚLTIMO PASSO ESCREVER NO ARQUIVO
            writeFileSync("./src/mock/dbClientes.json", JSON.stringify(newdb, null, 2))
        return novoCliente
        
    }

    static
    retornarCliente(id){
        return this.retornarClientes().find((cliente)=> cliente.id == id)
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

    static 
    editarCliente(id,data){

        if(db.clientes.length > 0){
            const cliente = db.clientes.find((cliente)=> cliente.id === Number(id))
        
            for (const propriedade in data) {
                cliente[propriedade] = data[propriedade]
            }

            return cliente
        }
    }

     //GERAR ID DE FORMA AUTOMATICA
     static
     gerarId(){

        //LENDO O ARQUIVO
        const dataRead = this.retornarClientes()

        let maxId = 0
        
        dataRead.forEach((cliente)=> {
            if(cliente.id > maxId){
                maxId = cliente.id 
            }
        })

        return maxId
    }

}
module.exports = ClienteController