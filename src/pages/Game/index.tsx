import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import GameBuy from '../../components/GameBuy';
import GameGenres from '../../components/GameGenres';
import { TGame } from '../../redux/game/types';

import styles from './Game.module.scss';

const Game: React.FC = () => {
  const [game, setGame] = React.useState<TGame>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchGame() {
      try {
        const { data } = await axios.get(`https://630a61573249910032851f2c.mockapi.io/items/${id}`);
        setGame(data);
      } catch (error) {
        console.log(error);
        navigate('/');
      }
    }

    fetchGame();
  }, []);

  if (!game) {
    return <>'Загрузка...'</>;
  }

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{game.title}</h1>
      <div className={styles.content}>
        <div className={styles.frame}>
          <iframe src={game.videoUrl} title='Youtube Video Player' frameBorder='null' />
        </div>
        <div className={styles.gameBlock}>
          <img src={game.imageUrl} alt='Game Image' />
          <p className={styles.description}>{game.description}</p>
          <p>Популярные метки этого продукта:</p>
          <GameGenres genres={game.genres} />
          <div className={styles.buy}>
            <GameBuy id={game.id} title={game.title} price={game.price} imageUrl={game.imageUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
