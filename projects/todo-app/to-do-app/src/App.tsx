import React, { useState } from "react";
import logo from "./logo.svg";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Themes";
import {
  GlobalStyle,
  H1,
  HeaderImage,
  Container,
  RowSpaceBetween,
  ButtonThemeToggle,
  Header,
} from "./components/Global";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <main>
          <Header>
            <HeaderImage />
            <Container>
              <RowSpaceBetween>
                <H1>To Do</H1>
                <ButtonThemeToggle
                  onClick={() => themeToggler()}
                ></ButtonThemeToggle>
              </RowSpaceBetween>
            </Container>
            <img src={logo} className="App-logo" alt="logo" />
          </Header>
          <Container></Container>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
