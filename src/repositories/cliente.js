'use strict';
const cliente = require('../controllers/cliente.js');
// inicio da declaracao das constantes
var database = require('../db/db_conexao.js');
// fim da declaracao das constantes

// inicio da busca de todos clientes
exports.listar = (callback, callbackError) => {
        const query = `SELECT * FROM avalicao_agencia.cao_cliente`

        database.query(query, (err, result) => {
                if (err) {
                        callbackError(err)
                };

                return callback(result);
        })
}
// fim da busca de todos clientes

// inicio da busca de faturas por cliente
exports.faturas = (data_inical, data_final, cliente, callback, callbackError) => {
        const query = `SELECT  
                                cao_os.co_os,
                                cao_cliente.co_cliente,
                                cao_cliente.no_razao,
                                sum(cao_fatura.valor) as receita, 
                                sum(cao_fatura.comissao_cn) as comissao,
                                DATE_FORMAT(cao_fatura.data_emissao, '%M, %Y') as mes
                                from avalicao_agencia.cao_os
                                inner join cao_fatura on cao_os.co_os = cao_fatura.co_os
                                inner join cao_cliente on cao_fatura.co_cliente = cao_cliente.co_cliente
                                 where  cao_cliente.co_cliente in (?) and
                                 data_emissao BETWEEN '${data_inical}' AND '${data_final}' 
                               
                                GROUP BY data_emissao ORDER BY data_emissao`;
        database.query(query, [cliente], (err, result) => {
                if (err) {
                        callbackError(err)
                };

                return callback(result);
        })

}
// fim da busca de faturas por cliente
