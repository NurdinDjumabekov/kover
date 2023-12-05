import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popular: 'Популярные',
  pathCatalog: localStorage.getItem('pathCatalog')
    ? localStorage.getItem('pathCatalog')
    : '',
};

const statesSlice = createSlice({
  name: 'statesSlice',
  initialState,
  reducers: {
    changePopular: (state, action) => {
      state.popular = action.payload;
    },
    changePathCatalog: (state, action) => {
      state.pathCatalog = action.payload;
    },
  },
});
export const { changePopular, changePathCatalog } = statesSlice.actions;

export default statesSlice.reducer;
