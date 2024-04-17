let mysql = require("mysql");

let conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "",
});

module.exports = conexao;
