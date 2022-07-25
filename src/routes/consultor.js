'use strict';
// inicio da declaracao das constantes
const express = require('express');
const router = express.Router();
const controller = require('../controllers/consultor.js');
// fim da declaracao das constantes

// inicio listagem das rotas
router.get('/listar', controller.listar);
router.post('/faturas', controller.faturas);
// fim listagem das rotas

module.exports = router;