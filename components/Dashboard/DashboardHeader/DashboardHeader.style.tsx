import styled from "styled-components/native";
import { Row } from "../../../components/containers/Layout";
import { fontMixin } from "../../../theme";

export const Header = styled(Row)`
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.dark};
  padding-horizontal: 20px;
  padding-vertical: 10px;
  position: relative;
`;

export const HeaderTitle = styled.Text`
  ${({ theme: { size } }) => fontMixin({ size: size.fonts.xlg, bold: true })}
`;

export const SigoutBtnContainer = styled.View`
  position: absolute;
  right: 20px;
`;

export const ActionBarContainer = styled(Row)`
  justify-content: space-between;
  margin-horizontal: 20px;
  margin-vertical: 30px;
`;

export const Heading = styled.Text`
  ${({ theme: { size } }) => fontMixin({ size: size.fonts.lg, bold: true })}
`;

export const FilterContainer = styled.TouchableOpacity<{
  active?: boolean;
  corner?: boolean;
  first?: boolean;
  last?: boolean;
}>`
  background-color: ${({
    theme: {
      colors: { background },
    },
    active,
  }) => (active ? background.blue : background.dark)};
  width: 73px;
  padding-vertical: 2px;
  ${({ first }) =>
    first &&
    `
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;

		
		`}
  ${({ last }) =>
    last &&
    `
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;

		
		`}
`;

export const FilterText = styled.Text`
  ${({ theme: { size } }) => fontMixin({ size: size.fonts.xs })}
  text-align: center;
`;

export const FieldSet = styled(Row)`
  margin-horizontal: 20px;
  justify-content: space-between;
`;

export const FieldLabel = styled.Text`
  ${({ theme: { size } }) => fontMixin({ size: size.fonts.lg })}
`;
