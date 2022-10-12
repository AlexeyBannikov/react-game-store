import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import Search from '../Search';
import CartBlock from '../CartBlock';
import logoSvg from '../../assets/icons/header-logo.svg';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Link to='/'>
          <div className={styles.logo}>
            <img width='44' src={logoSvg} alt='Header logo' />
            <div>
              <h1>Game store</h1>
              <p>Самые лучшие игры только здесь!</p>
            </div>
          </div>
        </Link>
        {location.pathname !== '/cart' && <Search />}
        <CartBlock />
      </div>
    </div>
  );
};

export default Header;
