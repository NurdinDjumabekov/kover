import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popular: 'Все',
  pathCatalog: '',
  positionFoods: 0,
  sumOrdersFoods: 0,
  allFoodsOrders: [],
  activeTypeEstab: 0,
  indexSlide: 0, // нужен для того , чтобы центрировать активный слайдер на детальной странице
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
    changeActiveType: (state, action) => {
      state.activeTypeEstab = action.payload;
    },
    changeIndexSlide: (state, action) => {
      state.indexSlide = action.payload;
    },
  },
});

export const {
  changePopular,
  changePathCatalog,
  changePositionFoods,
  changeSumOrdersFoods,
  addFoodsOrders,
  changeActiveType,
  changeIndexSlide,
} = statesSlice.actions;

export default statesSlice.reducer;
