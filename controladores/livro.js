const { getTodosLivros, insereLivro, deletaLivroPorId } = require('../servicos/livro');

function getLivros(req, res) {
    try {
        const livros = getTodosLivros();
        res.send(livros);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body;
        insereLivro(livroNovo);
        res.status(201);
        res.send('Livro inserido com sucesso');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            deletaLivroPorId(id);
            res.send('Livro deletado com sucesso');
        } else {
            res.status(422);
            res.send('ID inválido');
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getLivros,
    postLivro,
    deleteLivro
};