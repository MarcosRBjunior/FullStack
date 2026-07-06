const fs = require('fs');

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync('favoritos.json', 'utf-8'));
}

function deletaFavoritoPorId(id) {
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json', 'utf-8'));

    const favoritosFiltrados = favoritos.filter(favorito => favorito.id !== id);

    fs.writeFileSync('favoritos.json', JSON.stringify(favoritosFiltrados));
}

function insereFavorito(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json', 'utf-8'));
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json', 'utf-8'));

    const livroInserido = livros.find(livro => livro.id === id);
    const novaListaDeLivrosFavoritos = [...favoritos, livroInserido];

    fs.writeFileSync('favoritos.json', JSON.stringify(novaListaDeLivrosFavoritos));
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereFavorito
};