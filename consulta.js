var conexao = require("./conexao.js");

//Select from tabela
conexao.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM usuario", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
