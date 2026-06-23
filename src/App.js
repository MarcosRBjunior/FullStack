import './App.css';
import Logo from './componentes/Logo';
import perfil from './imagens/perfil.svg'
import sacola from './imagens/sacola.svg'
import OpcoesHeader from './componentes/OpcoesHeader';
import IconesHeader from './componentes/IconesHeader';



function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo/>
        <OpcoesHeader/>
        <IconesHeader/>
      </header>
    </div>
  );
}

export default App;