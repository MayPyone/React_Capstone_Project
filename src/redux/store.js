import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import cuisineReducer from './cuisine/cuisineSlice';
import detailReducer from './cuisine/detailSlice';

export default configureStore({
  reducer: {
    cuisine: cuisineReducer,
    detail: detailReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
