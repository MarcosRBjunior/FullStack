const express = require('express');
const livros = require('../livros.json');

const rotaLivro = express.Router();

rotaLivro.get('/', (req, res) => {
    res.status(200).json(livros);
});

module.exports = rotaLivro;