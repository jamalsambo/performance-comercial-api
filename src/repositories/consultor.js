'use strict';
// inicio da declaracao das constantes
var database = require('../db/db_conexao.js');
// fim da declaracao das constantes

// inicio da busca de todos consultores
exports.listar = (callback, callbackError) => {
        const query = `SELECT * FROM avalicao_agencia.cao_usuario inner join permissao_sistema  on cao_usuario.co_usuario = permissao_sistema.co_usuario  where permissao_sistema.co_sistema=1 and in_ativo='s' and  co_tipo_usuario BETWEEN '0' AND '2'`

        database.query(query, (err, result) => {
                if (err) {
                        callbackError(err)
                };

                return callback(result);
        })

}
// fim da busca de todos consultores

// inicio da busca de faturas por consultor
exports.faturas = (data_inical, data_final, consultor, callback, callbackError) => {
        const query = `SELECT  
                                cao_os.co_os,
                                cao_fatura.co_os, 
                                cao_fatura.data_emissao, 
                                sum((cao_fatura.valor*cao_fatura.comissao_cn)/100) as comissa,                                
                                sum(cao_fatura.valor - (cao_fatura.valor*cao_fatura.total_imp_inc)/100) as receita,
                                sum((cao_fatura.valor - (cao_fatura.valor*cao_fatura.total_imp_inc)/100) - (cao_salario.brut_salario + (cao_fatura.valor*cao_fatura.comissao_cn)/100))
                                as lucro,          
                                DATE_FORMAT(cao_fatura.data_emissao, '%M, %Y') as mes,
                                cao_usuario.co_usuario,
                                cao_usuario.no_usuario, 
                                cao_salario.brut_salario
                                FROM avalicao_agencia.cao_os 
                                left join cao_fatura on cao_os.co_os = cao_fatura.co_os 
                                inner join cao_usuario on cao_os.co_usuario = cao_usuario.co_usuario 
                                inner join cao_salario on cao_usuario.co_usuario = cao_salario.co_usuario 
                                where cao_usuario.co_usuario in (?) and data_emissao BETWEEN '${data_inical}' AND '${data_final}' 
                        GROUP BY co_usuario,mes ORDER BY data_emissao`
        database.query(query, [consultor], (err, result) => {
                if (err) {
                        callbackError(err)
                };

                return callback(result);
        })

}
// fim da busca de faturas por consultor