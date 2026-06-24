import Header from './componentes/Header';
import styled from 'styled-components';

const AppContainer = styled.div`
      .App{
        width: 100vw;
        height: 100vh;
        background-image: linear-gradient(90deg, #002f52, #2a0e41);
    }

    li{
        list-style: none;
      }
` 



function App() {
  return (
    <AppContainer>
      <Header/>
    </AppContainer>
  );
}

export default App;