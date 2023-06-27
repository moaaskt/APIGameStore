const servidor = require("express");
const bodyParser  = require("body-parser");
const app = servidor();
const rotas = require("./routes/usuarios")

app.use(bodyParser.json());
app.use("/", rotas);



app.listen(4000, () => {
    console.log("servidor rodando") //porta 3000

})