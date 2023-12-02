import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pathSiteSlice from './reducers/pathSiteSlice';
import dataAllSlice from './reducers/dataAllSlice';
import requestFoodSlide from './reducers/requestFoodSlide';

const reducer = combineReducers({
  pathSiteSlice,
  dataAllSlice,
  requestFoodSlide,
});
export const store = configureStore({
  reducer,
});
