import styled from "styled-components/native";
import { fontMixin } from "../../../theme";

export const CalenderWrapper = styled.TouchableOpacity`
  background-color: ${({ theme: { colors } }) => colors.background.light};
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  padding-horizontal: 5px;
  padding-vertical: 3px;
`;

export const CalenderText = styled.Text`
  ${({ theme: { size, colors } }) =>
    fontMixin({ size: size.fonts.xs, color: colors.font.dark })}
`;

export const FieldLabel = styled.Text`
  ${({ theme: { size } }) => fontMixin({ size: size.fonts.lg })}
`;
