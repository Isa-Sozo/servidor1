const http = require('http');
const url = require('url')
const {soma} = require('./teste')

const PORT = 8000

//criar o servidor
const server = http.createServer((req, res) => {
    const urlCapturada = url.parse(req.url, true)
    const {query, pathname} = urlCapturada
    let resultado = 0
    let mensagem = `O resultado é ${resultado}`
if (pathname == '/soma'){
    resultado  = soma (Number(query.a), Number(query.b))
}else if (pathname == '/subtracao'){ 
    resultado = subtracao (Number(query.a), Number(query.b))
}else if (pathname == '/multi'){ 
    resultado = multi (Number(query.a), Number(query.b))
}else if (pathname == '/divisao'){ 
    resultado = divisao (Number(query.a), Number(query.b))
} else{
    res.statusCode = 404
    mensagem = 'Página não encontrada'
}


res.end(`O valor final é ${resultado}`)
})
//fazer ele ouvir na porta 8000
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
