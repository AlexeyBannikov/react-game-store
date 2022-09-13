import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchGames } from './asyncActions';
import { IGameSliceState, Status } from './types';

const initialState: IGameSliceState = {
  items: [],
  count: 0,
  status: Status.LOADING,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGames.pending.type]: (state) => {
      state.items = [];
      state.count = 0;
      state.status = Status.LOADING;
    },
    [fetchGames.fulfilled.type]: (state, action: PayloadAction<IGameSliceState>) => {
      state.items = action.payload.items;
      state.count = action.payload.count;
      state.status = Status.SUCCESS;
    },
    [fetchGames.rejected.type]: (state) => {
      state.items = [];
      state.count = 0;
      state.status = Status.ERROR;
    },
  },
});

export const {} = gameSlice.actions;

export default gameSlice.reducer;
