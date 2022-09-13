import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import Categories from '../../components/Categories';
import GameBlock from '../../components/GameBlock';
import Skeleton from '../../components/GameBlock/Skeleton';
import Pagination from '../../components/Pagination';
import Sort, { sortList } from '../../components/Sort';
import { setCurrentCategory, setCurrentFilters, setCurrentPage } from '../../redux/filter/slice';
import { fetchGames } from '../../redux/game/asyncActions';
import { Status } from '../../redux/game/types';
import { RootState, useAppDispatch } from '../../redux/store';

import styles from './Home.module.scss';

const Home: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const isMounted = React.useRef(false);

  const { items, count, status } = useSelector((state: RootState) => state.game);
  const { currentCategory, searchValue, currentPage, sort } = useSelector(
    (state: RootState) => state.filter,
  );

  const onChangeCategory = (category: string) => {
    dispatch(setCurrentCategory(category));
  };

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  // Если был первый рендер, то проверяем URL-параметры и сохраняем в redux
  React.useEffect(() => {
    const sort = sortList.find((item) => item.sortProperty === searchParams.get('sortBy'));

    if (searchParams.get('currentPage')) {
      dispatch(
        setCurrentFilters({
          currentPage: Number(searchParams.get('currentPage')) || 1,
          currentCategory: searchParams.get('currentCategory') || 'Все',
          sort: sort || sortList[2],
          searchValue: searchParams.get('search') || '',
        }),
      );
    }
  }, []);

  //Если был первый рендер, то запрашиваем игры
  React.useEffect(() => {
    window.scrollTo(0, 0);

    const category = currentCategory !== 'Все' ? `&filter=${currentCategory}` : '';
    const search = searchValue ? `&title=${searchValue}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';

    dispatch(fetchGames({ category, search, currentPage, sortBy, order }));
  }, [currentCategory, searchValue, currentPage, sort.sortProperty]);

  //Если изменили параметры и был первый рендер
  React.useEffect(() => {
    if (isMounted.current) {
      setSearchParams(
        `currentPage=${currentPage}&currentCategory=${currentCategory}&sortBy=${sort.sortProperty}`,
      );
    }

    isMounted.current = true;
  }, [currentPage, currentCategory, sort.sortProperty]);

  const games = items.map((item) => <GameBlock key={item.id} {...item} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className={styles.root}>
      <div className={styles.upper}>
        <Categories currentCategory={currentCategory} onChangeCategory={onChangeCategory} />
        <Sort sortName={sort.name} />
      </div>

      {status === Status.ERROR ? (
        <div className={styles.errorInfo}>
          <h2>
            Произошла ошибка <span>😕</span>
          </h2>
          <p>К сожалению, не удалось получить игры. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className={styles.content}>{status === Status.LOADING ? skeletons : games}</div>
      )}
      {count === 0 && <>Найдено: 0 игр</>}

      <Pagination itemCount={count} currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
