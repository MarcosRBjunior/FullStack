import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    width: 320px;
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        border-color: #fff;
        background: rgba(255, 255, 255, 0.18);
    }
`;

const Img = styled.img`
    width: 72px;
    height: 96px;
    object-fit: cover;
    border-radius: 4px;
    flex-shrink: 0;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 0;
`;

const Nome = styled.p`
    color: #fff;
    margin: 0;
    font-size: 16px;
    line-height: 1.4;
`;

const Categoria = styled.span`
    color: #E8AE3A;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.02em;
`;

const Acao = styled.button`
    align-self: flex-start;
    background-color: ${props => (props.$desabilitado ? 'transparent' : '#EB9B00')};
    color: #fff;
    border: 1px solid ${props => (props.$desabilitado ? 'rgba(255,255,255,0.4)' : '#EB9B00')};
    border-radius: 20px;
    padding: 6px 16px;
    font-size: 13px;
    font-weight: 700;
    cursor: ${props => (props.$desabilitado ? 'default' : 'pointer')};

    &:hover {
        opacity: ${props => (props.$desabilitado ? 1 : 0.85)};
    }
`;

function CardLivro({ livro, acaoLabel, onAcao, acaoDesabilitada }) {
    return (
        <Card>
            <Img src={livro.src} alt={livro.nome} />
            <Info>
                {livro.categoria && <Categoria>{livro.categoria}</Categoria>}
                <Nome>{livro.nome}</Nome>
                {acaoLabel && (
                    <Acao
                        type="button"
                        $desabilitado={acaoDesabilitada}
                        disabled={acaoDesabilitada}
                        onClick={() => onAcao?.(livro)}
                    >
                        {acaoLabel}
                    </Acao>
                )}
            </Info>
        </Card>
    );
}

export default CardLivro;
