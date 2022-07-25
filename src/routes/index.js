'use strict';
// inicio da declaracao das constantes
const express = require('express');
const router = express.Router();
// fim da declaracao das constantes

// inicio da rota Principal
router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node API Angaza CRM",
        version: "1.0.0"
    });
});
// fim da rota Principal

module.exports = router;