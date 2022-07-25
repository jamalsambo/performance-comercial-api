'use strict';
// inicio da declaracao das constantes
const repository = require('../repositories/cliente.js');
let data = [];
// fim da declaracao das constantes

module.exports = {
    // inicio function listar clientes
    listar: (req, res, next) => {
        repository.listar(
            (dados) => {
                res.status(200).send(dados)
            },
            (error) => {
                res.status(404).json({ message: 'Falha em obter dados ' + error })
            }
        )
    },
    // inicio function listar clientes

     // inicio da funcao dos resultados da busca das faturas do cliente
     faturas: (req, res, next) => {
        let cliente = req.body.cliente;
        let mes_inicio = req.body.mes_inicio;
        let ano_inicio = req.body.ano_inicio;
        let mes_fim = req.body.mes_fim;
        let ano_fim = req.body.ano_fim;

        let data_inical = ano_inicio+"-"+mes_inicio+"-01"

        let data_final = ano_fim+"-"+mes_fim+"-01"
       

        repository.faturas(
            data_inical,
            data_final,
            cliente,
            (dados) => {
                res.status(200).send(dados)
            },
            (error) => {
                res.status(404).json({ message: 'Falha em obter dados ' + error })
            }
        )
    }
    // fim da funcao dos resultados da busca das faturas do cliente
}