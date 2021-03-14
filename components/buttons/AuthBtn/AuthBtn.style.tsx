import styled from "styled-components/native";
import { fontMixin, shadowMixin } from "../../../theme";

export const BtnContainer = styled.TouchableOpacity<{
  secondary?: boolean;
}>`
  justify-content: center;
  background-color: ${({ theme, secondary }) =>
    !secondary
      ? theme.colors.background.darkBlue
      : theme.colors.background.green};
  padding-horizontal: 50px;
  padding-vertical: 8px;
  ${shadowMixin(4)}
  border-radius: 10px;
`;

export const BtnText = styled.Text`
  ${fontMixin({ bold: true })}
`;
