import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getLivros } from '../servicos/livros';
import { getFavoritos, postFavorito } from '../servicos/favoritos';
import CardLivro from '../componentes/CardLivro';
import Notificacao from '../componentes/Notificacao';
import useNotificacao from '../hooks/useNotificacao';

const AppContainer = styled.div`
    min-height: 100vh;
    background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
    padding: 40px 24px;
    box-sizing: border-box;
`;

const Titulo = styled.h2`
    color: #fff;
    font-size: 32px;
    text-align: center;
    margin: 0 0 48px;
`;

const Grade = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
`;

function Estante() {
    const [livros, setLivros] = useState([]);
    const [idsFavoritos, setIdsFavoritos] = useState([]);
    const [mensagem, notificar] = useNotificacao();

    async function carregar() {
        const [livrosDaAPI, favoritosDaAPI] = await Promise.all([getLivros(), getFavoritos()]);
        setLivros(livrosDaAPI);
        setIdsFavoritos(favoritosDaAPI.map(favorito => favorito.id));
    }

    useEffect(() => {
        carregar();
    }, []);

    async function favoritar(livro) {
        await postFavorito(livro.id);
        setIdsFavoritos(atual => [...atual, livro.id]);
        notificar(`"${livro.nome}" adicionado aos favoritos!`);
    }

    return (
        <AppContainer>
            <Titulo>Nossa estante completa</Titulo>
            <Grade>
                {livros.map(livro => {
                    const jaFavoritado = idsFavoritos.includes(livro.id);
                    return (
                        <CardLivro
                            key={livro.id}
                            livro={livro}
                            acaoLabel={jaFavoritado ? 'Favoritado ✓' : 'Favoritar'}
                            acaoDesabilitada={jaFavoritado}
                            onAcao={favoritar}
                        />
                    );
                })}
            </Grade>
            <Notificacao mensagem={mensagem} />
        </AppContainer>
    );
}

export default Estante;
