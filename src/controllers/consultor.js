'use strict';
// inicio da declaracao das constantes
const repository = require('../repositories/consultor.js');
// fim da declaracao das constantes

module.exports = {
    // inicio da funcao do resultado listar consultores
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
   // fim da funcao do resultado listar consultores

    // inicio da funcao dos resultados da busca das faturas do consultor
    faturas: (req, res, next) => {
        let consultor = req.body.consultor;
        let mes_inicio = req.body.mes_inicio;
        let ano_inicio = req.body.ano_inicio;
        let mes_fim = req.body.mes_fim;
        let ano_fim = req.body.ano_fim;

        let data_inical = ano_inicio+"-"+mes_inicio+"-01"

        let data_final = ano_fim+"-"+mes_fim+"-01"
       

        repository.faturas(
            data_inical,
            data_final,
            consultor,
            (dados) => {
                res.status(200).send(dados)
            },
            (error) => {
                res.status(404).json({ message: 'Falha em obter dados ' + error })
            }
        )
    }
    // fim da funcao dos resultados da busca das faturas do consultor
}