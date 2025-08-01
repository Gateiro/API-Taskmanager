const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); //Módulo que permite requisições de diferentes origens.
app.use(express.json());

const tarefaRoutes = require('./routes/tarefaRoutes');
app.use('/', tarefaRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});