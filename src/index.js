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

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});


