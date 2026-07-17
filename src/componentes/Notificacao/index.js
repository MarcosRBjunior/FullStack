import styled from 'styled-components';

const Banner = styled.div`
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    background: #002f52;
    color: #fff;
    padding: 12px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    font-size: 14px;
    z-index: 100;
`;

function Notificacao({ mensagem }) {
    if (!mensagem) {
        return null;
    }

    return <Banner>{mensagem}</Banner>;
}

export default Notificacao;
