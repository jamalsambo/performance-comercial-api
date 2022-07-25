'use strict'

// inicio da declaracao das constantes
const app = require('../src/app');
const debug = require('debug')('nodestr:server');
const http = require('http');
const port = normalizePort(process.env.PORT || '5000');
app.set('port', port);
// fim da declaracao das constantes

// inicio da envocacao do http server
const server = http.createServer(app);
// fim da envocacao do http server

// inicio de instrucoes para rodar o servidor
server.listen(port);
server.on('error', onError);
server.on('listening', onListening)
console.log('API rodando na porta ' + port);
// fim de instrucoes para rodar o servidor

// inicio da normalizacao da porta a rodar
function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return port;
    }

    if (port >= 0) {
        return port
    }

    return false;
}
// fim da normalizacao da porta a rodar

// inicio da funcao para o erro de servidor
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + 'requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }

}
// fim da funcao para o erro de servidor

// inicio da funcao de debung
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
// fim da funcao de debung

