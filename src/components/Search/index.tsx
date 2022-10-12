import React from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import iconSvg from '../../assets/icons/search-icon.svg';
import clearIconSvg from '../../assets/icons/clear-icon.svg';
import { setSearchValue } from '../../redux/filter/slice';

import styles from './Search.module.scss';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 300),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.searchIcon} src={iconSvg} alt='Search icon' />
      <input
        ref={inputRef}
        onChange={onChangeInput}
        value={value}
        className={styles.input}
        placeholder='Поиск'
      />
      {value && (
        <img
          onClick={onClickClear}
          className={styles.clearIcon}
          src={clearIconSvg}
          alt='Clear icon'
        />
      )}
    </div>
  );
};

export default Search;
