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
  width: 45%;
  padding-vertical: 8px;
  ${shadowMixin(4)}
  border-radius: 10px;
`;

export const BtnText = styled.Text`
  ${fontMixin({ bold: true })}
  text-align: center;
`;
