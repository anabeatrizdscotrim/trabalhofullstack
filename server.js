const express = require('express');
const app = express();
const Pessoa = require('./models/pessoa');
const path = require('path'); // lida com caminhos de arquivos

const bodyParser = require('body-parser');
const pessoasRoutes = require('./routes/pessoas');

app.use(express.static(path.join(__dirname, 'public'))); // Middeleware para servir arquivos estáticos do 'public'

app.use(bodyParser.json());

app.use('/api', pessoasRoutes); // rotas de Pessoa

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
}); // serve a pagina html

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});