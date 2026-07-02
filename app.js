const express = require('express');
const cors = require('cors');
const rotaLivro = require('./rotas/livro');

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use('/livros', rotaLivro);

app.listen(8000, () => {
    console.log('Escutando a porta 8000');
});