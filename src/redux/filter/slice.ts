import { IFilterSliceState, SortPropertyEnum, TSort } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IFilterSliceState = {
  currentCategory: 'Все',
  currentPage: 1,
  searchValue: '',
  sort: {
    name: 'Сначала с высоким рейтингом',
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCurrentCategory(state, action: PayloadAction<string>) {
      state.currentCategory = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setCurrentSort(state, action: PayloadAction<TSort>) {
      state.sort = action.payload;
    },
    setCurrentFilters(state, action: PayloadAction<IFilterSliceState>) {
      state.currentPage = action.payload.currentPage;
      state.currentCategory = action.payload.currentCategory;
      state.sort = action.payload.sort;
    },
  },
});

export const {
  setCurrentCategory,
  setSearchValue,
  setCurrentPage,
  setCurrentSort,
  setCurrentFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
