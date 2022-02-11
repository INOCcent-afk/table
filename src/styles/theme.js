import {
  blueViolet,
  ghostWhite,
  black,
  transparent,
  white,
  gray20,
  gray10,
  blueViolet20,
  mediumVioletRed,
  pink,
  darkVioletRed,
} from "./colors";

const breakpoints = ["320px", "768px", "1024px", "1200px", "1440px"];

export const theme = {
  fontSizes: {
    label: "18px",
    description: "14px",
  },

  colors: {
    black: black,
    white: white,
    transparent: transparent,
    primary: mediumVioletRed,
    secondary: pink,

    darkVioletRed,

    blueViolet20,

    lightGray: gray10,
    mildGray: gray20,
  },

  mediaQueries: {
    mobileS: `only screen and (min-width: ${breakpoints[0]})`,
    tablet: `only screen and (min-width: ${breakpoints[1]})`,
    laptop: `only screen and (min-width: ${breakpoints[2]})`,
    laptopL: `only screen and (min-width: ${breakpoints[3]})`,
    desktop: `only screen and (min-width: ${breakpoints[4]})`,
  },
};

export default theme;
