export type TGame = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
  videoUrl: string;
  genres: string[];
};

export type SearchGameParams = {
  order: string;
  sortBy: string;
  category: string;
  search: string;
  currentPage: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IGameSliceState {
  items: TGame[];
  count: number;
  status: Status;
}
