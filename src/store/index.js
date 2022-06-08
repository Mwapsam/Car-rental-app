import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
import user from './user';
import carsReducer from './car';

// const reducer = combineReducers({
//   user,
//   cars: carsReducer,
// });
const store = configureStore({
  reducer: {
    cars: carsReducer,
    user,
  },
});
export default store;
