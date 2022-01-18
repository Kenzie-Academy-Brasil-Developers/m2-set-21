const express = require('express')
//SERVER
const app     = express()
const port    = 3000

app.get('/', (req, res) => {
    res.send('Olá Hudson!')
})

app.listen("3000", () => {
    console.log(`Example app listening at http://localhost:${port}`)
})