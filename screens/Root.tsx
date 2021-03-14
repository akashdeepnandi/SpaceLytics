import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dashboard, Login } from ".";
import { SelectAuth, userRehydrate } from "../redux/reducers/AuthReducer";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Auth } from "../App";

interface RootProps {}

const Root: React.FC<RootProps> = () => {
  const [loaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
  });
  const { isAuthenticated, user, isLoading } = useSelector(SelectAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoading) {
      Auth.onAuthStateChanged(function (user) {
        dispatch(userRehydrate());
      });
    }
  }, []);
  if (!loaded || isLoading) {
    return <AppLoading />;
  }

  return isAuthenticated ? <Dashboard /> : <Login />;
};

export default Root;
