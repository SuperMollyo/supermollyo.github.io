import styled, { DefaultTheme } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { borderRadius, font } from "../styles/StyleTokens";

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
	body {
        font-family: ${font.family.default}, sans-serif;
        font-size: ${font.size.default};
        background-color:  ${(props) => props.theme.backgroundColorBody};
        transition: 1s;
        color: ${({ theme }) => theme.backgroundColorBody};
        @media (max-width: 576px) {
          font-size: ${font.size.mobileDefault};
        }
	}
  button {
    font-family: ${font.family.default}, sans-serif;
    cursor: pointer;
    @media (max-width: 576px) {
      font-size: ${font.size.mobileDefault};
    }
  }
`;

export const H1 = styled.h1`
  font-size: ${font.size.h1};
  color: white;
  text-transform: uppercase;
  letter-spacing: 15px;
  font-weight: ${font.weight.bold};
  @media (max-width: 576px) {
    font-size: ${font.size.mobileH1};
    letter-spacing: 9px;
  }
`;
export interface ImageProps {
  sourceUrl: string;
}
export const ImageBackgroundContainer = styled.div<ImageProps>`
  background-image: url(${(props) => `${props.sourceUrl}`});
  display: block;
  width: 100%;
  height: auto;
  left: 0;
`;
export const Header = styled.header`
  margin-top: 40px;
  @media (max-width: 576px) {
    margin-top: 28px;
  }
`;
export const HeaderImage = styled.div`
  background-image: ${(props) => props.theme.backgroundImgDesktop};
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: 20.9%;
  background-size: 100% auto;
  position: absolute;
  top: 0;
  z-index: -1;
  transition: 1s;
  @media (max-width: 576px) {
    background-image: ${(props) => props.theme.backgroundImgMobile};
    padding-bottom: 53.5%;
  }
`;
export const Container = styled.div`
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 576px) {
    max-width: 327px;
  }
`;
export const RowSpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonThemeToggle = styled.button`
  border: none;
  background: none;
  transition: 1s;
  background-image: ${(props) => props.theme.iconImg};
  background-repeat: no-repeat;
  width: 26px;
  height: 26px;
  &:hover {
    filter: drop-shadow(0px 0px 5px white);
    transform: scale(1.1);
  }
`;
export const Ul = styled.ul`
  background: ${(props) => props.theme.backgroundColorContainer};
  border-radius: ${borderRadius.default};
  padding: 0;
`;
export const Li = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 25px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding: 20px;
  transition: 0.5s;
  cursor: pointer;
  &:first-child {
    border-top: none;
  }
  @media (max-width: 576px) {
    height: 22px;
    padding: 15px;
  }
`;
export const InstructionText = styled.p`
  color: ${(props) => props.theme.fontColorSecondary};
  margin: 50px 0;
  font-size: ${font.size.secondary};
  text-align: center;
  @media (max-width: 576px) {
    margin-top: 100px;
  }
`;
