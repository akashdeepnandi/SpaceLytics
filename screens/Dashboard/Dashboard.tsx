import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { Background, Spacer } from "../../components/containers/Layout";
import { DashboardHeader } from "../../components/Dashboard";
import { LaunchItem } from "../../components/Launch";
import {
  fetchLaunches,
  filterLaunchByDate,
  LaunchFilter,
  SelectLaunch,
} from "../../redux/reducers/LaunchReducer";

const ImgSrc = require("../../assets/images/dashboard.jpg");

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

interface DashboardProps {}

const data = [1, 2, 3, 3, 4, 5, 6, 7, 8, 8, 9, 2, 2, 3, 21, 2];

// const ItemSeparatorComponent

const Dashboard: React.FC<DashboardProps> = () => {
  const { isLoading, items } = useSelector(SelectLaunch);
  const [filter, setFilter] = useState<LaunchFilter>("ALL");
  const dispatch = useDispatch();
  const dispatchFetch = useCallback(() => dispatch(fetchLaunches(filter)), [
    filter,
    dispatch,
    fetchLaunches,
  ]);
  const handleRefresh = useCallback(dispatchFetch, [dispatchFetch]);
  const [dateRange, setDateRange] = useState<DateRange>({
    start: null,
    end: null,
  });
  const handleDateFilter = () => {
    if (dateRange.start && dateRange.end) {
      dispatch(filterLaunchByDate(JSON.stringify(dateRange)));
    }
  };

  useEffect(() => {
    dispatchFetch();
  }, [filter]);

  return (
    <Background source={ImgSrc}>
      <SafeAreaView style={{ flex: 1 }}>
        <DashboardHeader
          {...{
            filter,
            setFilter,
            dateRange,
            setDateRange,
            handleDateFilter,
          }}
        />
        <FlatList
          contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
          keyExtractor={(item, index) => index.toFixed(0)}
          ItemSeparatorComponent={() => (
            <>
              <Spacer mtop="20" />
            </>
          )}
          data={items}
          renderItem={({ item, index }) => (
            <LaunchItem key={index} {...{ item }} />
          )}
          numColumns={1}
          refreshing={isLoading}
          onRefresh={handleRefresh}
        />
      </SafeAreaView>
    </Background>
  );
};

export default Dashboard;
