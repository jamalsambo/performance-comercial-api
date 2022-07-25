"use strict";
// inicio da declaracao das constantes
const express = require("express");
const router = express.Router();
const consultor = require("./consultor.js");
const cliente = require("./cliente.js");
// fim da declaracao das constantes

// inicio da definicao de rotas padrao
router.use("/consultor", consultor);
router.use("/cliente", cliente);
// fim da definicao de rotas padrao

module.exports = router;