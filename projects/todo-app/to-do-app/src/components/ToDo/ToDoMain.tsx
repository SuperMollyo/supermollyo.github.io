import React from "react";
import styled from "styled-components";
import { borderRadius } from "../../styles/StyleTokens";
import { Ol } from "../Global";
import { ToDoDisplayPanel } from "./ToDoDisplayPanel";

export const ContainerToDo = styled.div`
  background: ${(props) => props.theme.backgroundColorContainer};
  border-radius: ${borderRadius.default};
  padding: 0;
  box-shadow: ${(props) => props.theme.dropShadow};
`;
export interface ToDoProps {
  ToDoItem: React.ReactNode;
  filterButtonList: JSX.Element[];
  itemsLeft: number;
  clearAllItems: () => void;
}

export const ToDoMain = (props: ToDoProps) => {
  return (
    <ContainerToDo>
      <Ol role="listbox">{props.ToDoItem}</Ol>
      <ToDoDisplayPanel
        filterButtonList={props.filterButtonList}
        itemsLeft={props.itemsLeft}
        clearAllItems={props.clearAllItems}
      />
    </ContainerToDo>
  );
};
