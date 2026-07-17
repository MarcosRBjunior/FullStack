import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { getLivros } from '../servicos/livros';
import { getFavoritos, postFavorito } from '../servicos/favoritos';
import CardLivro from '../componentes/CardLivro';
import Notificacao from '../componentes/Notificacao';
import useNotificacao from '../hooks/useNotificacao';

const TODAS = 'Todas';

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
    margin: 0 0 32px;
`;

const Chips = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    margin-bottom: 40px;
`;

const Chip = styled.button`
    background: ${props => (props.$ativo ? '#EB9B00' : 'transparent')};
    color: #fff;
    border: 1px solid ${props => (props.$ativo ? '#EB9B00' : 'rgba(255,255,255,0.4)')};
    border-radius: 20px;
    padding: 8px 18px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        border-color: #fff;
    }
`;

const Grade = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
`;

const MensagemVazia = styled.p`
    color: #fff;
    text-align: center;
    font-size: 16px;
`;

function Categorias() {
    const [livros, setLivros] = useState([]);
    const [idsFavoritos, setIdsFavoritos] = useState([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(TODAS);
    const [mensagem, notificar] = useNotificacao();

    async function carregar() {
        const [livrosDaAPI, favoritosDaAPI] = await Promise.all([getLivros(), getFavoritos()]);
        setLivros(livrosDaAPI);
        setIdsFavoritos(favoritosDaAPI.map(favorito => favorito.id));
    }

    useEffect(() => {
        carregar();
    }, []);

    const categorias = useMemo(() => {
        const unicas = new Set(livros.map(livro => livro.categoria).filter(Boolean));
        return [TODAS, ...unicas];
    }, [livros]);

    const livrosFiltrados = categoriaSelecionada === TODAS
        ? livros
        : livros.filter(livro => livro.categoria === categoriaSelecionada);

    async function favoritar(livro) {
        await postFavorito(livro.id);
        setIdsFavoritos(atual => [...atual, livro.id]);
        notificar(`"${livro.nome}" adicionado aos favoritos!`);
    }

    return (
        <AppContainer>
            <Titulo>Explore por categoria</Titulo>
            <Chips>
                {categorias.map(categoria => (
                    <Chip
                        key={categoria}
                        type="button"
                        $ativo={categoria === categoriaSelecionada}
                        onClick={() => setCategoriaSelecionada(categoria)}
                    >
                        {categoria}
                    </Chip>
                ))}
            </Chips>
            {livrosFiltrados.length === 0 ? (
                <MensagemVazia>Nenhum livro encontrado nessa categoria.</MensagemVazia>
            ) : (
                <Grade>
                    {livrosFiltrados.map(livro => {
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
            )}
            <Notificacao mensagem={mensagem} />
        </AppContainer>
    );
}

export default Categorias;
