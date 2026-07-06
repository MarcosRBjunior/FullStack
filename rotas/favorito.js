const express = require('express');
const { getFavoritos, postFavorito, deleteFavorito } = require('../controladores/favorito');

const rotaFavorito = express.Router();

rotaFavorito.get('/', getFavoritos);
rotaFavorito.post('/:id', postFavorito);
rotaFavorito.delete('/:id', deleteFavorito);

module.exports = rotaFavorito;