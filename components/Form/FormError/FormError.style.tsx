import styled from "styled-components/native";
import { fontMixin } from "../../../theme";

export const ErrorText = styled.Text`
  ${({ theme: { size, colors } }) =>
    fontMixin({ size: size.fonts.sm, color: colors.font.red })}
`;
