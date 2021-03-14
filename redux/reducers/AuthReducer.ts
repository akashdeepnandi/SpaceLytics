import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Auth } from "../../App";
import { AuthState } from "../@types/Auth";
import { AppThunk, RootState } from "../store";

const initialState: AuthState = {
  isLoading: true,
  isAuthenticated: false,
  user: null,
  isError: false,
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<any>) => ({
      ...state,
      isAuthenticated: true,
      isLoading: false,
      user: JSON.parse(action.payload),
      isError: false,
    }),
    signOut: (state) => ({
      ...state,
      isAuthenticated: false,
      isLoading: false,
      user: null,
      isError: false,
    }),
    loading: (state: AuthState) => {
      state = {
        ...state,
        isLoading: true,
      };
    },
    error: (state) => ({
      ...state,
      isAuthenticated: false,
      isLoading: false,
      user: null,
      isError: true,
    }),
  },
});

export const { error, loading, signIn, signOut } = AuthSlice.actions;

export const userSignIn = (email: string, password: string): AppThunk => async (
  dispatch
) => {
  if (email && password) {
    try {
      const user = await Auth.signInWithEmailAndPassword(email, password);
      dispatch(signIn(JSON.stringify(user)));
    } catch (err) {
      dispatch(error());
      console.error(err);
    }
  }
};

export const userSignOut = (): AppThunk => async (dispatch) => {
  try {
    if (Auth.currentUser) {
      dispatch(signOut());
      await Auth.signOut();
    }
  } catch (err) {
    console.error(err);
  }
};

export const userRehydrate = (): AppThunk => async (dispatch) => {
  try {
    if (Auth.currentUser) {
      const user = Auth.currentUser;
      dispatch(signIn(JSON.stringify(user)));
    } else {
      dispatch(signOut());
    }
  } catch (err) {
    console.error(err);
  }
};

export const SelectAuth = (state: RootState) => state.Auth;
export default AuthSlice.reducer;

// Action creators are generated for each case reducer function
