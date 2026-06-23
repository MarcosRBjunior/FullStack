import './estilo.css';
import logo from '../../imagens/logo.svg';

function Logo() {
    return (
        <div className='logo'>
          <img 
            src={logo} 
            alt='logo' 
            className='logo-img'
          />
          <p>Bordelesscoding</p>
        </div>
    );
}

export default Logo;
