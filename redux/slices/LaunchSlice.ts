import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LaunchState } from "../@types/Launch";
import { AppThunk, RootState } from "../store";

const initialState: LaunchState = {
  isLoading: true,
  items: [],
};

export const LaunchSlice = createSlice({
  name: "Launch",
  initialState,
  reducers: {
    loading: (state) => {
      state = {
        ...state,
        isLoading: true,
        items: [],
      };
    },
    loaded: (state, action: PayloadAction<any[]>) => {
      state = {
        ...state,
        isLoading: false,
        items: action.payload,
      };
    },
  },
});

export const { loading, loaded } = LaunchSlice.actions;

export const fetchLaunches = (): AppThunk => (dispatch) => {
  setTimeout(() => {
    dispatch(loaded([1, 2, 3]));
  }, 1000);
};

export const SelectLaunch = (state: RootState) => state.Launch;

export default LaunchSlice.reducer;
