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
  const toDoItemToggler = (id: string) => {
    // console.log(items[0]);
    const updatedItems = items.map((item) => {
      console.log("item: " + item.name);
      if (id === item.id) {
        // console.log("item: " + item.name + "isComplete: " + item.isComplete);
        // item.isComplete = !item.isComplete;
        // console.log("item: " + item.name + "isComplete: " + item.isComplete);
        // return item;
        return { ...item, isComplete: !item.isComplete };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const DATA = {
    toDoItems: [
      {
        id: "todo-0",
        name: "Eat",
        isComplete: true,
      },
      {
        id: "todo-1",
        name: "Sleep",
        isComplete: false,
      },
    ],
  };
  const [items, setItems] = useState(DATA.toDoItems);
  const addItem = (name: string) => {
    const newItem: ToDoItemProps = {
      id: "todo-" + nanoid(),
      name: name,
      isComplete: false,
    };
    setItems([...items, newItem]);
  };
  const deleteItem = (id: string) => {
    console.log("delete");
    const updatedItems = items.filter((items) => id !== items.id);
    setItems(updatedItems);
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
                <H1>ToDo</H1>
                <ButtonThemeToggle
                  onClick={() => themeToggler()}
                ></ButtonThemeToggle>
              </RowSpaceBetween>
            </Container>
          </Header>
          <Container>
            <ToDoForm addToDoItem={addItem}></ToDoForm>
            <ToDo
              toDoItems={items}
              toggleIsComplete={toDoItemToggler}
              deleteItem={deleteItem}
            />
          </Container>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
