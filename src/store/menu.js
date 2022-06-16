/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState: {
    active: false,
  },
  reducers: {

    menuState: (state) => {
      state.active = !state.active;
    },

  },
});

export default slice.reducer;

// Actions
const {
  menuState,
} = slice.actions;

export const updateMenuState = () => async (dispatch) => {
  dispatch(menuState());
};
