const fs = require('fs');

function getTodosLivros() {
    return JSON.parse(fs.readFileSync('livros.json', 'utf-8'));
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync('livros.json', 'utf-8'));

    const livrosAtualizados = [...livros, livroNovo];

    fs.writeFileSync('livros.json', JSON.stringify(livrosAtualizados));
}

function deletaLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json', 'utf-8'));

    const livrosFiltrados = livros.filter(livro => livro.id !== id);

    fs.writeFileSync('livros.json', JSON.stringify(livrosFiltrados));
}

module.exports = {
    getTodosLivros,
    insereLivro,
    deletaLivroPorId
};