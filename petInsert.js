let http = require('http')
let url = require('url')
let fs = require('fs')
let formidable = require('formidable')
let conexao = require('./conexao')

http.createServer(
    function(req, res) {
        if(req.url == './petInsert') {
            let form = new formidable.IncomingForm()

            form.parse(req, 
                function(err, fields, files) {
                    let operacao = `INSERT INTO ${fields.nome} (nome, idade, raca, nomeResponsavel) VALUES ('${fields.nome}', ${fields.idade}, '${fields.raca}', '${fields.nomeResponsavel}')`

                    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
                    res.write(`<p>Pet ${fields.nome} cadastrado com sucesso</p>`)
                    res.write(`<p>Operação executada: ${operacao}</p>`)
                    res.end()

                    conexao.connect(
                        function(err) {
                            conexao.query(operacao,
                                function(err) {
                                    if(err)
                                        throw err
                                }
                            )
                        }
                    )
                }
            )
        }
        else {
            fs.readFile('petInsert.html', 
                function(err, pagina) {
                    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
                    res.write(pagina)
                    res.end()
                }
            )
        }
    }
).listen(3000)

console.log('Servidor iniciado na porta 3000. Pressiones CTRL + C para derrubar.')