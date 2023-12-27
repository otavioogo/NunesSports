const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const app = express();

app.use(bodyParser.json());

// rotas
require('./routes')(app);

// banco de dados
sequelize.sync().then(() => {
 console.log('Banco de dados sincronizado com sucesso');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Servidor rodando na porta ${PORT}`);
});