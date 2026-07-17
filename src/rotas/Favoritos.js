import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { deleteFavorito, getFavoritos } from '../servicos/favoritos';
import CardLivro from '../componentes/CardLivro';
import Notificacao from '../componentes/Notificacao';
import useNotificacao from '../hooks/useNotificacao';

const AppContainer = styled.div`
      min-height: 100vh;
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

const Vazio = styled.div`
  text-align: center;
  color: #fff;
  margin-top: 48px;
`;

const LinkEstante = styled(Link)`
  color: #E8AE3A;
  font-weight: 700;
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);
  const [mensagem, notificar] = useNotificacao();

  async function fetchFavoritos() {
      const favoritosDaAPI = await getFavoritos();
      setFavoritos(favoritosDaAPI);
  }

  useEffect(() => {
      fetchFavoritos();
  }, []);

  async function deletarFavorito(livro) {
      await deleteFavorito(livro.id);
      await fetchFavoritos();
      notificar(`"${livro.nome}" removido dos favoritos.`);
  }

  return (
    <AppContainer>
      <Titulo>Aqui estão seus livros favoritos:</Titulo>
      {favoritos.length === 0 ? (
        <Vazio>
          <p>Você ainda não tem favoritos.</p>
          <p>Explore nossa <LinkEstante to="/estante">estante</LinkEstante> e favorite alguns livros!</p>
        </Vazio>
      ) : (
        <ListaFavoritos>
          {favoritos.map(favorito => (
            <CardLivro
              key={favorito.id}
              livro={favorito}
              acaoLabel="Remover"
              onAcao={deletarFavorito}
            />
          ))}
        </ListaFavoritos>
      )}
      <Notificacao mensagem={mensagem} />
    </AppContainer>
  );
}

export default Favoritos;
