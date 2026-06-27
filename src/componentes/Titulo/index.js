import styled from "styled-components";

export const Titulo = styled.h2`
    color: #E8AE3A;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-align: center;
    color: ${props => props.cor || '#000000'};
    width: 100%;
    margin: 0;
    padding: 26px 16px 24px;
    text-transform: uppercase;
`;