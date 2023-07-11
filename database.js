const pg = require("pg");
require('dotenv').config();





const database = new pg.Client('postgres://bvwkfpsi:B-GfAxhsSWr6aDYnfwCwv0a70GvotF9t@silly.db.elephantsql.com/bvwkfpsi');

database.connect((erro) =>{
    if(erro){
        return console.log("erro na conexão com o postgree");
    } else {
        return console.log("conexão concluida com sucesso")
    }


})


module.exports = database;