import styled from "styled-components/native";
import { fontMixin, shadowMixin } from "../../../theme";
import { Row } from "../../containers/Layout";

export const Container = styled.View`
  background-color: ${({ theme: { colors } }) => colors.background.dark};
  padding: 20px;
  padding-bottom: 30px;
  border-radius: 10px;
  ${shadowMixin(5)}
`;

export const Heading = styled.Text`
  ${({ theme: { size } }) => fontMixin({ size: size.fonts.xlg })}
  text-align: center;
`;

export const LaunchDateContainer = styled(Row)`
  justify-content: center;
`;

export const DetailHeading = styled.Text`
  ${({ theme: { size } }) => fontMixin({ size: size.fonts.lg })}
`;

export const DetailSubHeading = styled.Text`
  ${({ theme: { size, colors } }) =>
    fontMixin({ size: size.fonts.sm, color: colors.font.grey })}
`;

export const CloseModal = styled.TouchableOpacity`
  align-items: center;
`;
