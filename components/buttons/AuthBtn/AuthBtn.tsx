import React from "react";
import { BtnContainer, BtnText } from "./AuthBtn.style";

interface AuthBtnProps {
  title: string;
  secondary?: boolean;
  onPress: () => void;
  disabled?: boolean;
}

const AuthBtn: React.FC<AuthBtnProps> = ({
  title,
  secondary,
  onPress,
  disabled,
}) => {
  return (
    <BtnContainer {...{ secondary, onPress, disabled }}>
      <BtnText>{title}</BtnText>
    </BtnContainer>
  );
};

export default AuthBtn;
