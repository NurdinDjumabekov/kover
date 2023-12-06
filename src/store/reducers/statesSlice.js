import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // popular: localStorage.getItem('activeText') || 'Все',
  popular: 'Все',
  pathCatalog: localStorage.getItem('pathCatalog') || '',
  positionFoods: 0,
  sumOrdersFoods: 0,
  allFoodsOrders: [],
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
    changePositionFoods: (state, action) => {
      state.positionFoods = action.payload;
    },
    changeSumOrdersFoods: (state, action) => {
      state.sumOrdersFoods = action.payload;
    },
    addFoodsOrders: (state, action) => {
      state.allFoodsOrders = action.payload;
    },
  },
});
export const {
  changePopular,
  changePathCatalog,
  changePositionFoods,
  changeSumOrdersFoods,
  addFoodsOrders,
} = statesSlice.actions;

export default statesSlice.reducer;
