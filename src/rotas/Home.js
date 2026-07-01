import Pesquisa from '../componentes/Pesquisa';
import styled from 'styled-components';
import UltimosLancamentos from '../componentes/UltimosLancamentos';

const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background-image: linear-gradient(90deg, #002f52, #2a0e41);
`;

function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home;
