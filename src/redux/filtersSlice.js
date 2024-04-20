import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.name = payload;
    },
  },
  selectors: {
    selectNameFilter: state => state.name,
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
export const { selectNameFilter } = filterSlice.selectors;
