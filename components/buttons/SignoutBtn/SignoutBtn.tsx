import React from "react";
import { TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { theme } from "../../../theme";
interface SignoutProps {}

const SignoutBtn: React.FC<SignoutProps> = () => {
  return (
    <TouchableOpacity onPress={() => console.log("clicked logout")}>
      <SimpleLineIcons name="logout" size={20} color="#fff" />
    </TouchableOpacity>
  );
};

export default SignoutBtn;
