import React, { useState } from "react";
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
import { ToDoForm } from "./components/ToDoForm";
import { ToDo, ToDoItemProps } from "./components/ToDo";
import { nanoid } from "nanoid";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const DATA = {
    toDoItems: [
      { id: "todo-0", name: "Eat", isComplete: true },
      { id: "todo-1", name: "Sleep", isComplete: false },
      { id: "todo-2", name: "Repeat", isComplete: false },
    ],
  };
  const [tasks, setTasks] = useState(DATA.toDoItems);
  const addTask = (name: string) => {
    const newTask: ToDoItemProps = {
      id: "todo-" + nanoid(),
      name: name,
      isComplete: false,
    };
    setTasks([...tasks, newTask]);
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
          </Header>
          <Container>
            <ToDoForm addToDoItem={addTask}></ToDoForm>
            <ToDo toDoItems={tasks} />
          </Container>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
