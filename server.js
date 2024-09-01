const express = require('express');
const app = express();
const Pessoa = require('./models/pessoa');

const bodyParser = require('body-parser');
const pessoasRoutes = require('./routes/pessoas');


app.use(bodyParser.json());

app.use('/api', pessoasRoutes); // rotas de Pessoa

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});