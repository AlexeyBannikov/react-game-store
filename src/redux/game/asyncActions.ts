import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TGame, SearchGameParams } from './types';

export const fetchGames = createAsyncThunk<TGame[], SearchGameParams>(
  'game/fetchGamesStatus',
  async (params) => {
    const { category, search, currentPage, sortBy, order } = params;
    const { data } = await axios.get(
      `https://630a61573249910032851f2c.mockapi.io/items?page=${currentPage}&limit=6${search}${category}&sortBy=${sortBy}&order=${order}`,
    );

    return data;
  },
);
