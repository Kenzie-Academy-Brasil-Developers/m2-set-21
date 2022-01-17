const express = require('express')
const server     = express()
const port       = 3000

server.use(express.json())

const clientes = [
    {
        "id":1,
        "nome":"Hudson",
        "idade":"25",
        "cidade":"Curitiba",
        "telefone":"00-000000",
    },
    {
        "id":2,
        "nome":"Maria",
        "idade":"22",
        "cidade":"Guarapuava",
        "telefone":"00-000000",
    }
]

server.get('/', (request, response) => {

    console.log("oi")
    response.send('Hello World!')

})

server.get('/clientes', (request, response) => {

    
    response.status(201).json(clientes)

})

server.get('/clientes/:id(\\d+)', (request, response) => {

    const {id}  = request.params
   

    const cliente = clientes.find((cliente) => cliente.id == id)
    response.status(201).json(cliente)

})

server.post('/clientes', function(request, response){
    const cliente = request.body

    clientes.push(cliente)

    response.send(cliente)
})

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
  