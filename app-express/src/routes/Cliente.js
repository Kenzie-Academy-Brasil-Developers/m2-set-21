const express = require("express")
const router = express.Router()


//IMPORTANTDO CONTROLLER DE CLIENTES
const ClienteController = require("./../controllers/Cliente") 

//MÉTODO GET/CLIENTES SERVINDO INFOMRAÇÕS PARA O FRONT-END
router.get('', (req, response)=>{

    console.log(req.query)
    const clientes = ClienteController.retornarClientes()
    response.status(200).json(clientes)

})

//MÉTODO GET/ RETORNA UM ÚNICO CLIENTE: ID
router.get('/:id', (req, response)=>{
   
    const {id} = req.params
   
    const cliente = ClienteController.retornarCliente(id)
    
    if(cliente){
        response.status(200).json(cliente)  
    }else{
        response.status(404).send("Cliente não encontrado")  
    }

})



//MÉTODO POST/CLIENTES RECEBENDO INFOMRAÇÕS DO FRONT-END
router.post('', (request, response)=> {

    //PEGANDO O DADO PASSADO PELO FRONT, ENVIADO PELA API/CLIENTES
    const dados = request.body
   
    //PASSSANDO PARA O CONTROLLER FAZER O PRÓXIMO PASSO
    const cliente = ClienteController.cadastrarCliente(dados)

    //RETORNO PARA O FRONT-END UM STATUS DE SUCESSO 
    response.status(201).json(cliente)

})

//MÉTODO GET/ RETORNA UM ÚNICO CLIENTE: ID
router.delete('/:id', (req, response)=>{
   
    const {id} = req.params
   
    const cliente = ClienteController.deletarCliente(id)
    
    if(cliente){
        response.status(200).json(cliente)  
    }else{
        response.status(404).send("Cliente não encontrado")  
    }

})



module.exports = router