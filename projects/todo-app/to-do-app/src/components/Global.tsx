import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { font } from "../styles/StyleTokens";

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
	body {
        font-family: ${font.family.default}, sans-serif;
        background-color:  ${(props) => props.theme.backgroundColorBody};
       
        color: ${({ theme }) => theme.backgroundColorBody};
	}
`;

export const H1 = styled.h1`
  font-size: ${font.size.h1};
  color: white;
  text-transform: uppercase;
  letter-spacing: 15px;
  font-weight: ${font.weight.bold};
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
`;
export const Container = styled.div`
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
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
  cursor: pointer;
  transition: 1s;
  background-image: ${(props) => props.theme.iconImg};
  background-repeat: no-repeat;
  width: 26px;
  height: 26px;
  &:hover {
    filter: drop-shadow(2px 2px 3px black);
    transform: scale(1.1);
  }
`;
