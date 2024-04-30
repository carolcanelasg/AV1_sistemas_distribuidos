var conexao = require("./conexao.js");

//Select from tabela
conexao.connect(function (err) {
  if (err) throw err;
  conexao.query("SELECT * FROM pet", function (err, result, fields) { 
    //alterar pra entrar tabela dinamica pela entrada de usuario 
    //algo como ${fields.nome}
    if (err) throw err;
    console.log(result);
  });
});




