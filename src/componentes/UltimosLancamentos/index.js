import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';
import imagemLivro from '../../imagens/livro2.png';
import styled from 'styled-components';

const UltimosLancamentosContainer = styled.section`
    width: 100%;
    background-color: #FFFFFF;
`;


const LivrosArea = styled.div`
    width: 100%;
    background-color: #F3F3F3;
    display: flex;
    justify-content: center;
    padding: 26px 16px 36px;
`;

const LivrosContainer = styled.div`
    width: 100%;
`;

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor="#000000">ÚLTIMOS LANÇAMENTOS</Titulo>
            <LivrosArea>
                <LivrosContainer>
                    <CardRecomenda
                        titulo="Talvez você se interesse por..."
                        subtitulo="Angular 11"
                        descricao="Construindo uma aplicação integrada com a plataforma Google."
                        img={imagemLivro}
                    />
                </LivrosContainer>
            </LivrosArea>
        </UltimosLancamentosContainer>
    );
}


export default UltimosLancamentos;