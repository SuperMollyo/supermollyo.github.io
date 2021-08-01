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
import { ToDo, ToDoItem, ToDoItemProps } from "./components/ToDo";
import { FilterButton } from "./components/FilterButton";
import { nanoid } from "nanoid";

export const FILTER_MAP: any = {
  All: () => true,
  Active: (items: ToDoItemProps) => items.isComplete !== true,
  Completed: (items: ToDoItemProps) => items.isComplete !== false,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const toggleIsComplete = (id: string) => {
    // console.log(items[0]);
    const updatedItems = items.map((item) => {
      // console.log("item: " + item.name);
      console.log("item: " + item.name + "isComplete: " + item.isComplete);
      if (id === item.id) {
        // console.log("item: " + item.name + "isComplete: " + item.isComplete);
        // item.isComplete = !item.isComplete;
        // console.log("item: " + item.name + "isComplete: " + item.isComplete);
        // return item;
        if (item.isComplete === true) {
          setItemsLeftCount(itemsLeftCount + 1);
        } else {
          decrementItemsLeft();
        }
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
  const [filter, setFilter] = useState("All");
  const countItemsLeft = () => {
    let count = 0;
    items.map((item) => {
      if (item.isComplete === false) {
        count++;
      }
    });
    return count;
  };
  const decrementItemsLeft = () => {
    if (itemsLeftCount !== 0) {
      setItemsLeftCount(itemsLeftCount - 1);
    }
  };
  const [itemsLeftCount, setItemsLeftCount] = useState(countItemsLeft);
  const addItem = (name: string) => {
    const newItem: ToDoItemProps = {
      id: "todo-" + nanoid(),
      name: name,
      isComplete: false,
    };
    setItems([...items, newItem]);
    setItemsLeftCount(itemsLeftCount + 1);
  };
  const deleteItem = (id: string) => {
    console.log("delete");
    const updatedItems = items.filter((items) => id !== items.id);
    setItems(updatedItems);
    decrementItemsLeft();
  };
  const clearCompletedItems = () => {
    const updatedItems = items.filter((items) => items.isComplete === false);
    setItems(updatedItems);
    setItemsLeftCount(updatedItems.length);
  };
  const toDoList = items
    .filter(FILTER_MAP[filter])
    .map((toDoItem: ToDoItemProps) => (
      <ToDoItem
        key={toDoItem.id}
        toDoItem={toDoItem}
        toggleIsComplete={toggleIsComplete}
        deleteItem={deleteItem}
      />
    ));
  const filterButtonList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      filterItems={setFilter}
    />
  ));
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
              ToDoItem={toDoList}
              filterButtonList={filterButtonList}
              toggleIsComplete={toggleIsComplete}
              deleteItem={deleteItem}
              itemsLeft={itemsLeftCount}
              clearAllItems={clearCompletedItems}
            />
          </Container>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
