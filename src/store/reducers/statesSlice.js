import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // popular: localStorage.getItem('activeText') || 'Все',
  popular: 'Все',
  pathCatalog: localStorage.getItem('pathCatalog') || '',
  positionFoods: localStorage.getItem('positionFoods') || 0,
  sumOrdersFoods: localStorage.getItem('sumOrdersFoods') || 0,
  allFoodsOrders: localStorage.getItem('allFoodsOrders') || [],
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
      localStorage.setItem('positionFoods', action.payload);
      state.positionFoods = action.payload;
    },
    changeSumOrdersFoods: (state, action) => {
      localStorage.setItem('sumOrdersFoods', action.payload);
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
