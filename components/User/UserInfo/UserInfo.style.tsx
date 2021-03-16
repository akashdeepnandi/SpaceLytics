import styled from "styled-components/native";
import { fontMixin } from "../../../theme";

export const Container = styled.View`
  margin-horizontal: 20px;
  margin-top: 20px;
`;

export const UserText = styled.Text`
  ${({ theme: { size, colors } }) =>
    fontMixin({ size: size.fonts.lg, color: colors.font.red, bold: true })}
  text-align: center;
`;
