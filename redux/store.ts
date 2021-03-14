import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { AuthReducer, LaunchReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    Launch: LaunchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
