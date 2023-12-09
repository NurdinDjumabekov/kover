import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//// slice
import pathSiteSlice from './reducers/pathSiteSlice';
import dataAllSlice from './reducers/dataAllSlice';
import requestFoodSlice from './reducers/requestFoodSlice';
import statesSlice from './reducers/statesSlice';
import postRequestSlice from './reducers/postRequestSlice';
import accountSlice from './reducers/accountSlice';
import EditDataUser from './reducers/EditDataUser';

const reducer = combineReducers({
  pathSiteSlice,
  dataAllSlice,
  requestFoodSlice,
  statesSlice,
  postRequestSlice,
  accountSlice,
  EditDataUser,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['statesSlice', 'accountSlice'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export { store };
