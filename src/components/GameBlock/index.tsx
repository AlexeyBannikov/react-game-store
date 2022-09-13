import React from 'react';
import { Link } from 'react-router-dom';

import GameBuy from '../GameBuy';
import GameGenres from '../GameGenres';

import styles from './GameBlock.module.scss';

type TGameBlockProps = {
  id: string;
  imageUrl: string;
  title: string;
  genres: string[];
  price: number;
};

const GameBlock: React.FC<TGameBlockProps> = ({ id, imageUrl, title, genres, price }) => {
  return (
    <div className={styles.block}>
      <div className={styles.upper}>
        <Link to={`/game/${id}`}>
          <img src={imageUrl} alt='Game Image' />
          <h2 className={styles.title}>{title}</h2>
        </Link>
      </div>
      <GameGenres genres={genres} />
      <div className={styles.bottom}>
        <GameBuy id={id} title={title} price={price} imageUrl={imageUrl} />
      </div>
    </div>
  );
};

export default GameBlock;
