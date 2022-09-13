export enum SortPropertyEnum {
  RATING_DESC = 'rating',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
}

export type TSort = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export interface IFilterSliceState {
  searchValue: string;
  currentCategory: string;
  currentPage: number;
  sort: TSort;
}
