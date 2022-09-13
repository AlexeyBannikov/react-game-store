import React from 'react';

import styles from './GameGenre.module.scss';

type TGameGenresProps = {
  genres: string[];
};

const GameGenres: React.FC<TGameGenresProps> = ({ genres }) => {
  return (
    <div className={styles.genres}>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGenres;
