import "styled-components";
import { lightTheme } from "./Themes";
// extend
declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColorBody: string;
    fontColorDefault: string;
    fontColorPrimary: string;
    fontColorSecondary: string;
    fontColorDisabled: string;
    backgroundColorContainer: string;
    backgroundImgDesktop: string;
    backgroundImgMobile: string;
    borderColor: string;
    iconImg: string;
    dropShadow: string;
  }
}
