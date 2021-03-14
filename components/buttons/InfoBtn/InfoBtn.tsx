import React from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { InfoImg } from "./InfoBtn.style";

interface InfoBtnProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const InfoImgSrc = require("../../../assets/icons/info.png");

const InfoBtn: React.FC<InfoBtnProps> = ({ onPress, style }) => {
  return (
    <TouchableOpacity {...{ onPress, style }}>
      <InfoImg source={InfoImgSrc} width={40} height={40} />
    </TouchableOpacity>
  );
};

export default InfoBtn;
