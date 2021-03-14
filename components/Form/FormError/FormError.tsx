import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Row, Spacer } from "../../containers/Layout";
import { StyleProp, ViewStyle } from "react-native";
import { ErrorText } from "./FormError.style";
import { theme } from "../../../theme";

interface FormErrorProps {
  style?: StyleProp<ViewStyle>;
  msg: string;
}

const FormError: React.FC<FormErrorProps> = ({ style, msg }) => {
  return (
    <Row {...{ style }}>
      <MaterialCommunityIcons
        name="hazard-lights"
        size={12}
        color={theme.colors.font.red}
      />
      <Spacer mright="3" />
      <ErrorText>{msg}</ErrorText>
    </Row>
  );
};

export default FormError;
