import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateRange } from "../../screens/Dashboard/Dashboard";
import { LaunchState } from "../@types/Launch";
import { AppThunk, RootState } from "../store";

const BASE_URL = "https://api.spacexdata.com/v3/launches";

export type LaunchFilter = "ALL" | "UPCOMING" | "PAST";

const initialState: LaunchState = {
  isLoading: true,
  items: [],
};

export const LaunchSlice = createSlice({
  name: "Launch",
  initialState,
  reducers: {
    loading: (state) => ({
      ...state,
      isLoading: true,
    }),
    loaded: (state, action: PayloadAction<any>) => ({
      ...state,
      isLoading: false,
      items: JSON.parse(action.payload),
    }),
    filterLaunchByDate: (state, action: PayloadAction<any>) => {
      const dateRange = JSON.parse(action.payload);
      const start = new Date(dateRange.start);
      const end = new Date(dateRange.end);
      return {
        ...state,
        items: state.items.filter((item) => {
          const launchDate = new Date(item.launch_date_utc);
          return (
            // @ts-ignore
            launchDate >= start && launchDate <= end
          );
        }),
      };
    },
  },
});

export const { filterLaunchByDate, loading, loaded } = LaunchSlice.actions;

export const fetchLaunches = (filter: LaunchFilter): AppThunk => async (
  dispatch
) => {
  try {
    const url =
      BASE_URL +
      (filter === "ALL" ? "" : filter === "UPCOMING" ? "/upcoming" : "/past");
    const launchesResponse = await fetch(url);
    const launchesJSON = await launchesResponse.json();
    console.log(launchesJSON.length);
    dispatch(loaded(JSON.stringify(launchesJSON)));
  } catch (err) {
    console.error(err);
  }
};

export const SelectLaunch = (state: RootState) => state.Launch;

export default LaunchSlice.reducer;
