import styled from "styled-components/native";
import { fontMixin, shadowMixin } from "../../../theme";
import { Row } from "../../containers/Layout";

export const Container = styled(Row)`
  background-color: ${({ theme: { colors } }) => colors.background.dark};
  padding-horizontal: 15px;
  padding-vertical: 10px;
  width: 100%;
  border-radius: 10px;
  ${shadowMixin(5)}
`;

export const RocketImg = styled.Image`
  width: 30px;
  height: 30px;
`;

export const TextGroup = styled.View`
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  ${({ theme: { size } }) => fontMixin({ size: size.fonts.lg })}
`;

export const LaunchDate = styled.Text`
  background-color: ${({ theme: { colors } }) => colors.background.light};
  ${({ theme: { size, colors } }) =>
    fontMixin({ size: size.fonts.xs, color: colors.font.blue })}
  padding-horizontal: 15px;
  padding-vertical: 3px;
  border-radius: 5px;
  include-font-padding: false;
`;
