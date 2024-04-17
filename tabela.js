var conexao = require("./conexao.js");

//Criar tabela
conexao.connect(function (err) {
  if (err) throw err;
  console.log("Conectado com o Banco de Dados!");
  var sql = "CREATE TABLE usuario (nome VARCHAR(255), endereco VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table criada");
  });
});
