import Input from '../Input';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getLivros } from '../../servicos/livros';
import { postFavorito } from '../../servicos/favoritos';

const PesquisaContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`;

const Subtitulo = styled.h3`
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 40px;
    color: #FFF;
`;

const Resultado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    img {
        width: 150px;
        height: 200px;
        object-fit: cover;
        margin-bottom: 10px;
        transition: border 0.3s ease;
        border: 1px solid transparent;
    }
    
    &:hover img {
        border: 1px solid #FFF;
    }
    
    p {
        color: #FFF;
        font-size: 14px;
        text-align: center;
        max-width: 150px;
    }
`;

function Pesquisa() {
    const [livrosPesquisados, setlivrosPesquisados] = useState([]);
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        fetchLivros();
    }, []);

    async function fetchLivros() {
        const livrosDaAPI = await getLivros();
        setLivros(livrosDaAPI);
    }

    async function insertFavorito(id) {
        await postFavorito(id);
        alert(`Livro de id:${id} inserido!`);
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                type="text"
                placeholder="Escreva sua próxima leitura"
                onChange={evento => {
                    const textoDigitado = evento.target.value.toLowerCase();
                    const resultadoPesquisas = livros.filter(livro =>
                        livro.nome.toLowerCase().includes(textoDigitado)
                    );
                    setlivrosPesquisados(resultadoPesquisas);
                }}
            />
            {livrosPesquisados.map(livro => (
                <Resultado key={livro.id} onClick={() => insertFavorito(livro.id)}>
                    <img src={livro.src} alt={livro.nome} />
                    <p>{livro.nome}</p>
                </Resultado>
            ))}
        </PesquisaContainer>
    );

}




export default Pesquisa;