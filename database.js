const pg = require("pg");
require('dotenv').config();




const database = new pg.Client(process.env.STRING_ELEPHANT);

database.connect((erro) =>{
    if(erro){
        return console.log("erro na conexão com o postgree");
    } else {
        return console.log("conexão concluida com sucesso")
    }


})


module.exports = database;