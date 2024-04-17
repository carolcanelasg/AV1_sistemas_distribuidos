var conexao = require("./conexao.js");

//Inserir registro
conexao.connect(function (err) {
  if (err) throw err;
  console.log("Conectado com o Banco de Dados!");
  var sql = "INSERT INTO usuario (nome, endereco) VALUES ('zé', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Registro inserido");
  });
});
