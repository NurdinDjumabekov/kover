import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  paginationCount: localStorage.getItem('paginationMain')
    ? Number(localStorage.getItem('paginationMain'))
    : 1,
};

const dataAllSlice = createSlice({
  name: 'dataAllSlice',
  initialState,
  reducers: {
    changePaginationCount: (state, action) => {
      state.paginationCount = action.payload;
    },
  },
});
export const { changePaginationCount } = dataAllSlice.actions;

export default dataAllSlice.reducer;
