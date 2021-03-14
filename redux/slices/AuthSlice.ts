import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../@types/Auth";
import { AppThunk, RootState } from "../store";

const initialState: AuthState = {
  isLoading: true,
  isAuthenticated: false,
  user: null,
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<any>) => {
      state = {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    },
    signOut: (state) => {
      state = {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: null,
      };
    },
    rehydrate: (state, action: PayloadAction<any>) =>
      (state = {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      }),
    loading: (state: AuthState, action: PayloadAction<any>) => {
      state = {
        ...state,
        isLoading: true,
      };
    },
  },
});

export const { loading, rehydrate, signIn, signOut } = AuthSlice.actions;

export const userSignIn = (username: string, password: string): AppThunk => (
  dispatch
) => {
  if (username && password) {
    const user = { name: "Akash" };
    setTimeout(() => {
      dispatch(signIn(user));
    }, 1000);
  }
};

export const userSignOut = (): AppThunk => (dispatch) => {
  setTimeout(() => {
    dispatch(signOut());
  }, 1000);
};

export const SelectAuth = (state: RootState) => state.Auth;

export default AuthSlice.reducer;

// Action creators are generated for each case reducer function
