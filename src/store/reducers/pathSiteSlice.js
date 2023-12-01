import { createSlice } from '@reduxjs/toolkit';
// import { standartAxios } from '../../helpers/standartAxios';

const initialState = {
  pathOne: {
    link: '',
    title: '',
  },
  pathTwo: {
    link: '',
    title: '',
  },
  pathThree: {
    link: '',
    title: '',
  },
};

const pathSiteSlice = createSlice({
  name: 'pathSiteSlice',
  initialState,
  reducers: {
    changePathOne: (state, action) => {
      state.pathOne = action.payload;
    },
    changePathTwo: (state, action) => {
      state.pathTwo = action.payload;
    },
    changePathThree: (state, action) => {
      state.pathThree = action.payload;
    },
  },
});
export const { changePathOne, changePathTwo, changePathThree } =
  pathSiteSlice.actions;

export default pathSiteSlice.reducer;
