import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import './estilo.css';

const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <ul className='icones'>
            {icones.map((icone, index) => (
              <li className='icone' key={index}>
                <img src={icone} alt='icone'/>
              </li>
            ))}
        </ul>
    );
}

export default IconesHeader;