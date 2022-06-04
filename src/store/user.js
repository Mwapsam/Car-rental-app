import { createSlice } from "@reduxjs/toolkit";
import UserService from "../services/user.service";
import LocalStorage from "../helpers/localStorage";

const initialUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const slice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: initialUser ? true : false,
    data: initialUser,
  },
  reducers: {
    signupSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.data = action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
      window.history.pushState({}, "", "/");
      window.location.reload();
    },
    loginSuccess: (state, action) => {
      console.log(action.payload);
      state.isLoggedIn = true;
      state.data = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      window.history.pushState({}, "", "/");
      window.location.reload();
    },
    loginFailure: (state) => {
      state = initialUser;
    },
    signupFailure: (state) => {
      state = initialUser;
    },
    logoutUser: (state, action) => {
      LocalStorage.removeUser();
      window.history.pushState({}, "", "/login");
      window.location.reload();
    },
    setMessage: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default slice.reducer;

// Actions
const {
  signupSuccess,
  loginSuccess,
  loginFailure,
  signupFailure,
  logoutUser,
  setMessage,
} = slice.actions;

export const login = (formData) => async (dispatch) => {
  try {
    const {
      data: { user, jwt, error },
    } = await UserService.login(formData);

    if (user && jwt) {
      const loggedInUser = { ...user, token: jwt };
      return dispatch(loginSuccess(loggedInUser));
    }
    if (error) {
      console.log("This is the mapped error", error);
      dispatch(setMessage(error));
      return dispatch(loginFailure());
    }
  } catch (e) {
    return dispatch(loginFailure());
  }
};
export const signup = (formData) => async (dispatch) => {
  try {
    const {
      data: { user, jwt, errors },
    } = await UserService.signup(formData);
    console.log(user);
    if (user && jwt) {
      const signedUpUser = { ...user, token: jwt };
      return dispatch(signupSuccess(signedUpUser));
    }
    if (errors) {
      return dispatch(signupFailure());
    }
  } catch (e) {
    return console.error(e.message);
  }
};

export const logout = () => async (dispatch) => {
  dispatch(logoutUser());
};
