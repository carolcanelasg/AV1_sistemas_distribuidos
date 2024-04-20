let http = require("http");
let url = require("url");
let fs = require("fs");
let formidable = require("formidable");
let conexao = require("./conexao");

http
  .createServer(function (req, res) {
    if (req.url == "/criarBD") {
      let form = new formidable.IncomingForm();

      form.parse(req, function (err, fields, files) {
        let operacao = `CREATE DATABASE ${fields.nome}`;

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write(`<p>Banco de dados ${fields.nome} criado! </p>`);
        res.end();

        conexao.connect(function (err) {
          conexao.query(operacao, function (err) {
            if (err) {
              throw err;
            }
          });
        });
      });
    } else {
      fs.readFile("criarBD.html", function (err, pagina) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write(pagina);
        res.end();
      });
    }
  })
  .listen(3000);

console.log(
  "Servidor iniciado na porta 3000. Pressiones CTRL + C para derrubar."
);
