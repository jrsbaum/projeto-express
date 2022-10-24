const { json } = require("express");
const express = require("express");
const servidor = express();
const NeDB = require("nedb");
const db = new NeDB({
  filename: "products.db",
  autoload: true,
});

servidor.get("/products", (request, response) => {
  db.find({}).exec((erro, dados) => {
    if (erro) {
      console.error(erro);
    } else {
      response.json(dados);
    }
  });
});

servidor.listen(4000, () => {
  console.log("O servidor ta rodando!");
});
