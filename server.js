const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const rotas = require("./routes/usuarios");
const cors = require('cors');


app.use(bodyParser.json());
app.use(cors()); 
app.use("/", rotas);

app.listen(3000, () => {
  console.log("servidor rodando na porta 3000");
});
