import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import { store } from "./redux/store";

export default function App() {
  const [loaded] = useFonts({
    PoppinsRegular: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
  });
  if (!loaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <SafeAreaProvider>
        <View style={styles.container}>
          <Text style={{ fontFamily: "PoppinsRegular" }}>
            Open up App.tsx to start working on your app!
          </Text>
          <Text style={{ fontFamily: "PoppinsBold" }}>
            Open up App.tsx to start working on your app!
          </Text>
        </View>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
