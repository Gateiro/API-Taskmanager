const db = require('../config/db');
/*Função assíncrona para requisitar
todas as tarefas do banco de dados*/
async function listarQuery() {
        const [resultado] = await db.query
        ('SELECT * FROM tarefas');
        return resultado;
}

module.exports = { listarQuery}