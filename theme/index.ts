export const theme = {
  colors: {
    background: {
      dark: "#1d1e21",
      light: "#c4c4c4",
      red: "#c24d4d",
      blue: "#0046e2",
      darkBlue: "#1a4a83",
      green: "#26a41b",
    },
    font: {
      dark: "#000",
      light: "#fff",
      grey: "#a5a5a5",
    },
  },
  fonts: {
    regular: "PoppinsRegular",
    bold: "PoppinsBold",
  },
  size: {
    fonts: {
      xs: "12px",
      sm: "14px",
      lg: "16px",
      xlg: "18px",
      xxlg: "24px",
    },
  },
};

export const shadowMixin = (value: number) => `
	shadow-color: #000;
  shadow-offset: ${value - 1}px ${value - 1}px;
  shadow-opacity: 0.5;
  shadow-radius: ${value - 1}px;
  elevation: ${value};
`;

export const fontMixin = ({ size = "14px", color = "#fff", bold = false }) => `
	font-size: ${size};
  font-family: ${bold ? theme.fonts.bold : theme.fonts.regular};
  color: ${color};
`;

declare module "styled-components" {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}
