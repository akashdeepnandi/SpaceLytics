import React from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background, Spacer } from "../../components/containers/Layout";
import { DashboardHeader } from "../../components/Dashboard";
import { LaunchItem } from "../../components/Launch";
import { ContentWrapper } from "../../containers/ContentWrapper";

const ImgSrc = require("../../assets/images/dashboard.jpg");

interface DashboardProps {}

const data = [1, 2, 3, 3, 4, 5, 6, 7, 8, 8, 9, 2, 2, 3, 21, 2];

// const ItemSeparatorComponent

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <Background source={ImgSrc}>
      <SafeAreaView style={{ flex: 1 }}>
        <DashboardHeader />
        <FlatList
          contentContainerStyle={{ paddingHorizontal: 20 }}
          keyExtractor={(item, index) => index.toFixed(0)}
          ItemSeparatorComponent={() => (
            <>
              <Spacer mtop="20" />
            </>
          )}
          data={data}
          renderItem={({ item, index }) => <LaunchItem key={index} />}
          numColumns={1}
        />
      </SafeAreaView>
    </Background>
  );
};

export default Dashboard;
