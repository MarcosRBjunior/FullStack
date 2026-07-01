import IconesHeader from "../IconesHeader";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #FFF;    
    display: flex;
    justify-content: flex-start;
    padding: 0 30px;
    position: sticky;
    top: 0;
    z-index: 10;
`

const LogoLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

function Header() {
    return (    
        <HeaderContainer>
            <LogoLink to="/">
                <Logo/>
            </LogoLink>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
          )
    }

export default Header;