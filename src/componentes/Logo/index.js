import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const logoContainer = styled.div`
  display: flex;
  font-size: 30px;
`  
const LogoImage = styled.img`
  margin-right: 10px;
`

function Logo() {
    return (
        <logoContainer>
          <LogoImage
            src={logo} 
            alt='logo' 
          />
          <p>Bordelesscoding</p>
        </logoContainer>
    );
}

export default Logo;
