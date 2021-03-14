import React from "react";
import { TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
interface SignoutProps {
  onPress: () => void;
}

const SignoutBtn: React.FC<SignoutProps> = ({ onPress }) => {
  return (
    <TouchableOpacity {...{ onPress }}>
      <SimpleLineIcons name="logout" size={20} color="#fff" />
    </TouchableOpacity>
  );
};

export default SignoutBtn;
