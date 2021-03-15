import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Provider } from "react-redux";
import { Root } from "./screens";
import { store } from "./redux/store";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import firebase from "firebase";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs();

const firebaseConfig = {
  // Add your firebaseConfig here...
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export const Auth = firebase.auth();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <StatusBar />
          <Root />
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
