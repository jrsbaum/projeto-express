const { json } = require("express");
const express = require("express");
const servidor = express();
const NeDB = require("nedb");
const db = new NeDB({
  filename: "products.db",
  autoload: true,
});

servidor.use(express.json());
servidor.use(express.urlencoded({ extended: true }));

servidor.get("/products", (req, res) => {
  db.find({}).exec((erro, dados) => {
    if (erro) {
      console.error(erro);
    } else {
      res.json(dados);
    }
  });
});

servidor.post("/products", (req, res) => {
  db.insert(req.body, (erro, newProduct) => {
    if (erro) {
      console.error(erro);
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(newProduct);
    }
  });
});

servidor.listen(4000, () => {
  console.log("O servidor ta rodando!");
});
