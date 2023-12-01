import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pathSiteSlice from './reducers/pathSiteSlice';

const reducer = combineReducers({
  pathSiteSlice,
});
export const store = configureStore({
  reducer,
});
