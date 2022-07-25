'use strict';

// inicio da declaracao das constantes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const index = require('./routes/index.js');
const routes = require('./routes/routes.js');
// fim da declaracao das constantes

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

// inicio de carregamento das rotas
app.use('/', index);
app.use('/api/', routes);
// fim de carregamento das rotas

module.exports = app;