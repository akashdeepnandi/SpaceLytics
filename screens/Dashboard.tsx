import React from "react";
import { View, Text } from "react-native";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontFamily: "PoppinsRegular" }}>Login Screen</Text>
    </View>
  );
};

export default Dashboard;
