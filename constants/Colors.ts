import { createTheme, useTheme as useRestyleTheme } from "@shopify/restyle";

export const palette = {
  black: "#101818",
  blackTint: "#696977",
  error: "#E25825",
  textTint: "rgba(0,0,0,0.5)",
  primary: "#07235C",
  white: "#FFF",
  toggleBackgroundSkin: "#FFF",
  greyBorder: "#E6E6E6",
  greyBackGround: "#F8F9FA",
};
export const darkModePalette = {
  toggleBackgroundSkin: "rgba(0, 0, 0, 0.9",
};

const theme = createTheme({
  breakpoints: {
    bigscreen: 412,
    phone: 0,
    tablet: 768,
  },
  colors: {
    ...palette,
  },
  spacing: {
    lg: 24, // large
    md: 16, // medium
    sl: 20, // semi large
    sm: 12, // semi medium
    sml: 8, // small
    xl: 32, // extra large
    xs: 4, // extra small
    xxl: 40, // extra extra large
    xxs: 2, // extra extra small
  },
  textVariants: {
    header: {
      color: "black",
      fontFamily: "harmonia-bd",
      fontSize: 20,
      fontWeight: "600",
    },
    body: {
      color: "black",
      fontFamily: "harmonia-rg",
      fontSize: 14,
      fontWeight: "400",
    },
    bold10: {
      color: "black",
      fontFamily: "harmonia-bd",
      fontSize: 10,
      fontWeight: "400",
    },
    bold12: {
      color: "black",
      fontFamily: "harmonia-bd",
      fontSize: 12,
      fontWeight: "400",
    },
    bold14: {
      color: "black",
      fontFamily: "harmonia-bd",
      fontSize: 14,
      fontWeight: "400",
    },
    bold16: {
      color: "black",
      fontFamily: "harmonia-bd",
      fontSize: 16,
      fontWeight: "600",
    },
    medium12: {
      color: "black",
      fontFamily: "harmonia-sbd",
      fontSize: 12,
      fontWeight: "600",
    },
    medium14: {
      color: "black",
      fontFamily: "harmonia-sbd",
      fontSize: 14,
      fontWeight: "600",
    },
    defaults: {},
  },
});

export type Theme = typeof theme;

export const useTheme = () => useRestyleTheme<Theme>();

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...palette,
    ...darkModePalette,
  },
};

export type PaletteType = keyof typeof palette;

export default theme;
