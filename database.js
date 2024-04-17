var conexao = require("./conexao.js");

//Criar base de dados
conexao.connect(function (err) {
  if (err) throw err;
  console.log("Conectado com o Banco de Dados!");
  con.query("CREATE DATABASE teste", function (err, result) {
    if (err) throw err;
    console.log("Database criada com sucesso");
  });
});
