const { response } = require('express')
const express = require('express')
const app  = express()
app.use(express.json())


//IMPORTANTO ROTAS
const routerCliente = require("./routes/Cliente")

//CONFIGURANDO ROTAS
app.use('/clientes', routerCliente)

app.get('/', (req, resposta) => {
    resposta.send('Seja bem-vindo ao app!')
})

module.exports = app










