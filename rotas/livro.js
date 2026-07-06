const express = require('express');
const { getLivros, postLivro, deleteLivro } = require('../controladores/livro');

const rotaLivro = express.Router();

rotaLivro.get('/', getLivros);
rotaLivro.post('/', postLivro);
rotaLivro.delete('/:id', deleteLivro);

module.exports = rotaLivro;