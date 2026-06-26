import { livros } from './dadosUltimosLancamentos';
import styled from 'styled-components';

const UltimosLancamentosContainer = styled.section`
    width: 100%;
    background-color: #FFFFFF;
`;

const Titulo = styled.h2`
    color: #E8AE3A;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-align: center;
    width: 100%;
    margin: 0;
    padding: 26px 16px 24px;
    text-transform: uppercase;
`;

const LivrosArea = styled.div`
    width: 100%;
    background-color: #F3F3F3;
    display: flex;
    justify-content: center;
    padding: 26px 16px 36px;
`;

const LivrosContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    flex-wrap: wrap;
`;

const LivroCard = styled.div`
    width: 168px;
    background-color: #FFFFFF;
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.14);

    img {
        display: block;
        width: 100%;
        height: auto;
    }
`;

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo>Ultimos Lancamentos</Titulo>
            <LivrosArea>
                <LivrosContainer>
                    {livros.map(livro => (
                        <LivroCard key={livro.id}>
                            <img src={livro.src} alt={livro.nome} />
                        </LivroCard>
                    ))}
                </LivrosContainer>
            </LivrosArea>
        </UltimosLancamentosContainer>
    );
}


export default UltimosLancamentos;