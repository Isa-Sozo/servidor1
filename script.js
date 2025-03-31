const http = require('http');
const {soma} = require('./teste')

const PORT = 8000

//criar o servidor
const server = http.createServer((req, res) => {
    let valores = req.url
        .replace('/','')
        .replace('?','')
        .split('&')
    let parametros = {}
    for (item in valores){
        let chaveValor = valores[item].split('=')
        parametros[chaveValor[0]] = Number(chaveValor[1])

    }
    console.log(parametros)
    let resultado = soma (parametros.a, parametros.b)
    res.end(`O valor final é ${resultado}`)
})
//fazer ele ouvir na porta 8000
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
