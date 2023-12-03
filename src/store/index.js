import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pathSiteSlice from "./reducers/pathSiteSlice";
import dataAllSlice from "./reducers/dataAllSlice";
import requestFoodSlice from "./reducers/requestFoodSlice";

const reducer = combineReducers({
  pathSiteSlice,
  dataAllSlice,
  requestFoodSlice,
});
export const store = configureStore({
  reducer,
});
