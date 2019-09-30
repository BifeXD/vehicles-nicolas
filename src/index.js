const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();


app.use(bodyParser.json());
app.use(cors('*'));

// Importando módulos da API
const customers = require("./api/customers")
const vehicles = require("./api/vehicles")

// Definindo rotas da API
app.use("/customers", customers)
app.use("/vehicles", vehicles)

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});


