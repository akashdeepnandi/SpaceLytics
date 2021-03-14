import styled from "styled-components/native";
import { Row } from "../../components/containers/Layout";
import { fontMixin, shadowMixin } from "../../theme";

export const FormContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background.dark};
  padding: 20px;
  width: 100%;
  border-radius: 25px;
  ${shadowMixin(5)}
`;

export const FormHeader = styled.Text`
  text-align: center;
  ${({ theme: { size } }) => fontMixin({ size: size.fonts.xxlg, bold: true })}
`;

export const FormLabel = styled.Text`
  ${fontMixin({ bold: false })}
`;

export const FieldSet = styled.View`
  margin-vertical: 10px;
`;

export const FormInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.background.light};
  ${fontMixin({ bold: false, color: "#000" })}
  border-radius: 5px;
  height: 40px;
  text-align: center;
`;

export const BtnGroup = styled(Row)`
  justify-content: space-between;
`;
