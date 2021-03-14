import React from "react";
import { BtnContainer, BtnText } from "./AuthBtn.style";

interface AuthBtnProps {
  title: string;
  secondary?: boolean;
  onPress: () => void;
}

const AuthBtn: React.FC<AuthBtnProps> = ({ title, secondary, onPress }) => {
  return (
    <BtnContainer {...{ secondary, onPress }}>
      <BtnText>{title}</BtnText>
    </BtnContainer>
  );
};

export default AuthBtn;
