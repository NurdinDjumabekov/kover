import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pathSiteSlice from './reducers/pathSiteSlice';
import dataAllSlice from './reducers/dataAllSlice';
import requestFoodSlice from './reducers/requestFoodSlice';
import statesSlice from './reducers/statesSlice';
import postRequestSlice from './reducers/postRequestSlice';

const reducer = combineReducers({
  pathSiteSlice,
  dataAllSlice,
  requestFoodSlice,
  statesSlice,
  postRequestSlice,
});
export const store = configureStore({
  reducer,
});
