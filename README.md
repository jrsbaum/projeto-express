# Projeto com express

### Este é um passo a passo para criar projetos full stack com express. Usarei como anotacao para futuros projetos.

## adicione package-json ao projeto com:

`npm init -y` (flag -y para aceitar tudo)

## adicione express ao projeto com:

`npm install express`

## adicione nodemon ao projeto com:

`npm install nodemon ----save-dev`

## adicione scripts na pasta package.json

```
"scripts": {
"dev": "nodemon index",
"start": "node index"
```

## exemplo de arquivo index.js e codigo

```
const express = require("express");

const servidor = express();

servidor.listen(4000, () => {
  console.log("O servidor ta rodando!");
});
```

## adicionando banco de dados `nedb` ao projeto

`npm install nedb`

## adicione essas duas const no comeco de index.js

```
const NeDB = require("nedb");
const db = new NeDB({
  filename: "products.db",
  autoload: true,
});
```

## o index.js deve ficar assim quando pronto pra listar produtos:

```
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
```
