import { COLORS } from "~src/colors";

interface ThemeColor {
  color: string;
}

interface Theme {
  [key: string]: ThemeColor;
}

export const theme: Theme = {
  blue: {
    color: COLORS.themeBlue,
  },
  purple: {
    color: COLORS.themePurple,
  },
  red: {
    color: COLORS.themeRed,
  },
  green: {
    color: COLORS.themeGreen,
  },
  skyBlue: {
    color: COLORS.themeSkyBlue,
  },
};
