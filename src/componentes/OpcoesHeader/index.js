import styled from 'styled-components';

const Opcao = styled.li`
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 20px;
    cursor: pointer;
    min-width: 120px;

`
const Opcoes = styled.ul`
  display: flex;
  align-items: center;
`


const textoOpcoes = ['Categorias', 'Minha Estante', 'Favoritos'];

function OpcoesHeader() {
    return (
        <Opcoes>
            { textoOpcoes.map( (texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ) ) }
        </Opcoes>
    )
}

export default OpcoesHeader