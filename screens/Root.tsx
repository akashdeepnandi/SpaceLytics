import React from "react";
import { useSelector } from "react-redux";
import { Dashboard, Login } from ".";
import { SelectAuth } from "../redux/slices/AuthSlice";

interface RootProps {}

const Root: React.FC<RootProps> = () => {
  const { isAuthenticated } = useSelector(SelectAuth);

  return true ? <Dashboard /> : <Login />;
};

export default Root;
