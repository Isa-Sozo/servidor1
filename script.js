const express = require('express')

const {soma,subtracao} = require('./teste')

const server = express()

const PORT = 8000

//criar o servidor
server.get('/soma', (req, res) => {
    //let resultado = soma(req.query.a, req.query.b)
    res.send('aqui vai o resultado')
})
server.get('/subtracao', (req, res) => {
    //let resultado = subracao(req.query.a, req.query.b)
    res.send('aqui vai o resultado subtracao')
})
//fazer ele ouvir na porta 8000
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
