import { color } from "./StyleTokens";
import { DefaultTheme } from "styled-components";
import bgLightDesktop from "../images/bg-desktop-light.jpg";
import bgLightMobile from "../images/bg-mobile-light.jpg";
import iconLight from "../images/icon-sun.svg";
import bgDarkDesktop from "../images/bg-desktop-dark.jpg";
import bgDarkMobile from "../images/bg-mobile-dark.jpg";
import iconDark from "../images/icon-moon.svg";

export const lightTheme: DefaultTheme = {
  backgroundColorBody: color.veryLightGray,
  fontColorDefault: color.veryDarkGrayishBlue,
  fontColorPrimary: color.brightBlue,
  fontColorSecondary: color.darkGrayishBlue,
  fontColorDisabled: color.lightGrayishBlue,
  backgroundColorContainer: "white",
  backgroundImgDesktop: `url(${bgLightDesktop})`,
  backgroundImgMobile: `url(${bgLightMobile})`,
  borderColor: color.veryLightGrayishBlue,
  iconImg: `url(${iconLight})`,
  dropShadow: `0px 35px 50px -15px rgba(194, 195, 214, 0.5)`,
};

export type ThemeType = typeof lightTheme;

export const darkTheme: DefaultTheme = {
  backgroundColorBody: color.veryDarkBlue,
  fontColorDefault: color.lightGrayishBlue2,
  fontColorPrimary: color.brightBlue,
  fontColorSecondary: color.darkGrayishBlue2,
  fontColorDisabled: color.veryDarkGrayishBlue2,
  backgroundColorContainer: color.veryDarkDesaturatedBlue,
  backgroundImgDesktop: `url(${bgDarkDesktop})`,
  backgroundImgMobile: `url(${bgDarkMobile})`,
  borderColor: color.veryDarkGrayishBlueAlt2,
  iconImg: `url(${iconDark})`,
  dropShadow: `none`,
};
