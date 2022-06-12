import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
import user from './user';
import carsReducer from './car';
// eslint-disable-next-line import/no-named-as-default
import reservationsSlice from './reservation';

// const reducer = combineReducers({
//   user,
//   cars: carsReducer,
// });
const store = configureStore({
  reducer: {
    cars: carsReducer,
    reservations: reservationsSlice,
    user,
  },
});
export default store;
