import React from 'react';

import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        <h1>Ничего не найдено</h1>
      </h1>
      <p className={styles.description}>
        К сожалению данная страница отсутствует на нашем веб-сайте.
      </p>
    </div>
  );
};

export default NotFound;
