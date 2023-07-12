const express = require("express");
const router = express.Router();
const controlBuscarDados = require("../controllers/buscarDados");




router.get("/games", controlBuscarDados.listarGames);
router.get("/admin", controlBuscarDados.listarAdmins);
router.get("/users", controlBuscarDados.listarUsers);
router.post("/cadastrarGames", controlBuscarDados.cadastrarGame);
router.post("/cadastrarUsers", controlBuscarDados.cadastrarUsuario);
router.post("/login", controlBuscarDados.login);
router.post("/cadastrarAdmin", controlBuscarDados.cadastrarAdmin);
router.delete("/deletargame/:id", controlBuscarDados.deletarGame);
router.delete("/deletarAdmin/:id", controlBuscarDados.deletarAdmin);
router.delete("/deletaruser/:id", controlBuscarDados.deletarUser);
router.get("/buscarPlataforma/:plataforma", controlBuscarDados.buscarPorPlataforma);
router.put("/atualizarGame/:id", controlBuscarDados.atualizarGame);
router.put("/atualizarUser/:id", controlBuscarDados.atualizarUser); 
router.get("/buscarGame", controlBuscarDados.buscarJogo)




module.exports = router;