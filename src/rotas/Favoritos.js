import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFavorito, getFavoritos } from '../servicos/favoritos';
import livroImg from '../imagens/livro2.png';

const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background-image: linear-gradient(90deg,#002f52 35%,#326589 165%);
      padding: 40px 24px;
      box-sizing: border-box;
`;

const ListaFavoritos = styled.div`
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: center;
      margin-top: 48px;
`;

const Titulo = styled.h2`
  color: #FFF;
  font-size: 32px;
  text-align: center;
  margin: 0;
`;

const Resultado = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  min-width: 320px;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: #fff;
    background: rgba(255, 255, 255, 0.18);
  }

  img {
    width: 72px;
    height: 96px;
    object-fit: cover;
  }

  p {
    color: #fff;
    margin: 0;
    font-size: 16px;
    line-height: 1.4;
  }
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
      const favoritosDaAPI = await getFavoritos();
      setFavoritos(favoritosDaAPI);
  }

    async function deletarFavorito(id) {
      await deleteFavorito(id);
      await fetchFavoritos();
      alert(`Livro de id:${id} deletado!`);
    }

  useEffect(() => {
      fetchFavoritos();
  }, []);

  return (
    <AppContainer>
      <Titulo>Aqui estão seus livros favoritos:</Titulo>
      <ListaFavoritos>
        {favoritos.map(favorito => (
          <Resultado key={favorito.id} onClick={() => deletarFavorito(favorito.id)}>
            <img src={livroImg} alt={favorito.nome} />
            <p>{favorito.nome}</p>
          </Resultado>
        ))}
      </ListaFavoritos>
    </AppContainer>
  );
}

export default Favoritos;
