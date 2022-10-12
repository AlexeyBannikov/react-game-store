import React from 'react';
import { useDispatch } from 'react-redux';

import sortIcon from '../../assets/icons/sort-icon.svg';
import { setCurrentSort } from '../../redux/filter/slice';
import { SortPropertyEnum } from '../../redux/filter/types';

import styles from './Sort.module.scss';

type TSortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

type TSortProps = {
  sortName: string;
};

export const sortList: TSortItem[] = [
  { name: 'Сначала дороже', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'Сначала дешевле', sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: 'Сначала с высоким рейтингом', sortProperty: SortPropertyEnum.RATING_DESC },
];

const Sort: React.FC<TSortProps> = ({ sortName }) => {
  const dispatch = useDispatch();
  const [isVisiblePopup, setIsVisiblePopup] = React.useState(false);

  const onClickItem = (item: TSortItem) => {
    dispatch(setCurrentSort(item));
    setIsVisiblePopup(false);
  };

  return (
    <div className={styles.sort}>
      <div className={styles.label}>
        <span onClick={() => setIsVisiblePopup(!isVisiblePopup)}>{sortName}</span>
        <img width='22' src={sortIcon} alt='Sort Icon' />
      </div>
      {isVisiblePopup && (
        <div className={styles.popup}>
          <ul>
            {sortList.map((item, index) => (
              <li key={index} onClick={() => onClickItem(item)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
