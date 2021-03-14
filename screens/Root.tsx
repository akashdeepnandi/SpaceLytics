import React from "react";
import { useSelector } from "react-redux";
import { Dashboard } from ".";
import { SelectAuth } from "../redux/slices/AuthSlice";
import Login from "./Login";

interface RootProps {}

const Root: React.FC<RootProps> = () => {
  const { isAuthenticated } = useSelector(SelectAuth);

  return isAuthenticated ? <Dashboard /> : <Login />;
};

export default Root;
