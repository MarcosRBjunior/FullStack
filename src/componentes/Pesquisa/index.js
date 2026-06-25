import Input from '../Input';
import styled from 'styled-components';

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

function Pesquisa() {
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input type="text" placeholder="Escreva sua próxima leitura" />
        </PesquisaContainer>
    );

}




export default Pesquisa;