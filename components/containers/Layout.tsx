import styled from "styled-components/native";

export const Background = styled.ImageBackground`
  flex: 1;
  resize-mode: cover;
  width: 100%;
`;

const returnMargin = (value: string | undefined) => (value ? value : "0");

export const Spacer = styled.View<{
  mleft?: string;
  mright?: string;
  mtop?: string;
  mbottom?: string;
}>`
  margin-left: ${({ mleft }) => returnMargin(mleft)}px;
  margin-right: ${({ mright }) => returnMargin(mright)}px;
  margin-top: ${({ mtop }) => returnMargin(mtop) + "px"};
  margin-bottom: ${({ mbottom }) => returnMargin(mbottom)}px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
