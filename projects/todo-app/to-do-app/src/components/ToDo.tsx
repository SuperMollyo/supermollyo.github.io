import React, { useState } from "react";
import styled from "styled-components";
import iconCheck from "../images/icon-check.svg";
import iconX from "../images/icon-cross.svg";
import iconDrag from "../images/icon-drag.svg";
import { borderRadius, color, font, gradient } from "../styles/StyleTokens";
import { RowSpaceBetween } from "./Global";
export const LabelRound = styled.label`
  cursor: pointer;
  color: ${(props) => props.theme.fontColorDefault};
  font-size: ${font.size.default};
  @media (max-width: 576px) {
    font-size: ${font.size.mobileDefault};
  }
`;
export const InputCheckBox = styled.input.attrs({ type: "checkbox" })`
  /* visibility: hidden; */
  position: absolute;
  height: 0px;
  width: 0px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  margin: 0;
  /* & + ${LabelRound} {
    display: block;
    position: relative;
    padding: 0 1.5rem;
  } */
  & + ${LabelRound}::before {
    content: "";
    cursor: pointer;
    position: relative;
    display: inline-block;
    margin-right: 24px;
    width: 24px;
    height: 24px;
    background: ${(props) => props.theme.backgroundColorContainer};
    border-radius: 100%;
    border: 1px solid ${(props) => props.theme.borderColor};
    vertical-align: middle;
    @media (max-width: 576px) {
      width: 20px;
      height: 20px;
    }
  }
  & + ${LabelRound}:hover::before {
    border: 1px solid transparent;
    background-image: linear-gradient(
        ${(props) => props.theme.backgroundColorContainer},
        ${(props) => props.theme.backgroundColorContainer}
      ),
      ${gradient.bluePurple};
    background-origin: border-box;
    background-clip: content-box, border-box;
    opacity: 1;
  }
  &:checked + ${LabelRound}::before {
    background: ${gradient.bluePurple};
    background-image: url(${iconCheck}), ${gradient.bluePurple};
    background-repeat: no-repeat;
    background-position: 54% 53%;
    border: 1px solid ${(props) => props.theme.backgroundColorContainer};
    opacity: 1;
  }
  & + ${LabelRound}::after {
    opacity: 0;
  }
  &:checked + ${LabelRound}::after {
    opacity: 1;
  }
  &:checked + ${LabelRound} {
    color: ${(props) => props.theme.fontColorDisabled};
    text-decoration: line-through;
  }
  &:focus + ${LabelRound}::before {
    box-shadow: 0 0 3px 2px #5e9ed6;
  }
`;
export interface ToDoItemProps {
  name: string;
  isComplete: boolean;
  id: string;
}
export const DragContainer = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: 576px) {
    width: 26px;
    height: 26px;
    right: -20px;
    background-size: 15px;
  }
`;
export const ButtonDrag = styled.button`
  border: 1px solid transparent;
  border-radius: 5px;
  background: ${(props) => props.theme.backgroundColorContainer};
  cursor: grab;
  transition: 0.5s;
  background-image: url(${iconDrag});
  background-repeat: no-repeat;
  width: 36px;
  height: 36px;
  background-size: 20px;
  /* position: absolute; */
  /* right: -30px; */
  /* top: 50%;
  transform: translateY(-50%); */
  background-position: center;
  &:hover {
    background-color: ${(props) => props.theme.fontColorPrimary};
  }
  @media (max-width: 576px) {
    width: 26px;
    height: 26px;
    /* right: -20px; */
    background-size: 15px;
  }
`;
export const DragDiv = styled.div`
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: ${(props) => props.theme.backgroundColorContainer};
  cursor: grab;
  transition: 0.5s;
  background-image: url(${iconDrag});
  background-repeat: no-repeat;
  width: 36px;
  height: 36px;
  background-size: 20px;
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
  background-position: center;
  &:hover {
    filter: drop-shadow(2px 1px 1px ${(props) => props.theme.fontColorPrimary});
  }
  &:active {
    background-color: ${(props) => props.theme.fontColorPrimary};
  }
  @media (max-width: 576px) {
    width: 26px;
    height: 38px;
    left: -20px;
    background-size: 15px;
  }
`;
export const ButtonDelete = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.5s;
  background-image: url(${iconX});
  background-repeat: no-repeat;
  background-position: center;
  width: 26px;
  height: 26px;
  &:hover {
    filter: drop-shadow(2px 1px 1px ${(props) => props.theme.fontColorPrimary});
    transform: scale(1.1);
  }
  @media (max-width: 576px) {
    width: 12px;
    height: 12px;
    background-size: 12px;
  }
`;
export const CheckboxRound = (props: {
  toDoItem: ToDoItemProps;
  toggleFunction: (id: string) => void;
}) => {
  return (
    <div>
      <InputCheckBox
        type="checkbox"
        id={props.toDoItem.id}
        defaultChecked={props.toDoItem.isComplete}
        onChange={() => props.toggleFunction(props.toDoItem.id)}
      />
      <LabelRound htmlFor={props.toDoItem.id}>{props.toDoItem.name}</LabelRound>
    </div>
  );
};
export const ToDoContainer = styled.ul`
  background: ${(props) => props.theme.backgroundColorContainer};
  border-radius: ${borderRadius.default};
  padding: 0;
  box-shadow: ${(props) => props.theme.dropShadow};
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
export const ToDoItem = (props: {
  toDoItem: ToDoItemProps;
  toggleIsComplete: (id: string) => void;
  deleteItem: (id: string) => void;
  onDragStart: (e: React.DragEvent<HTMLElement>, index: number) => void;
  onDragEnter: (e: React.DragEvent<HTMLElement>, index: number) => void;
  onDragOver: (e: React.DragEvent<HTMLElement>, index: number) => void;
  onDragLeave: (e: React.DragEvent<HTMLElement>, index: number) => void;
  onDrop: (e: React.DragEvent<HTMLElement>, index: number) => void;
  onDragEnd: (e: React.DragEvent<HTMLElement>) => void;
  index: number;
}) => {
  return (
    <Li
      onDoubleClick={() => console.log("double")}
      //   draggable={true}
      //   onDragStart={(e) => props.onDragStart(e, props.index)}
      //   onDragEnter={(e) => props.onDragEnter(e, props.index)}
      //   onDragOver={(e) => props.onDragOver(e, props.index)}
      //   onDragLeave={(e) => props.onDragLeave(e, props.index)}
      //   onDrop={(e) => props.onDrop(e, props.index)}
      //   onDragEnd={(e) => props.onDragEnd(e)}
    >
      <CheckboxRound
        toDoItem={props.toDoItem}
        toggleFunction={props.toggleIsComplete}
      />

      <ButtonDelete
        type="button"
        onClick={() => props.deleteItem(props.toDoItem.id)}
      ></ButtonDelete>
      {/* <DragContainer
        draggable={true}
        onDragStart={(e) => props.onDragStart(e, props.index)}
        onDragEnter={(e) => props.onDragEnter(e, props.index)}
        onDragOver={(e) => props.onDragOver(e, props.index)}
        onDragLeave={(e) => props.onDragLeave(e, props.index)}
        onDrop={(e) => props.onDrop(e, props.index)}
        onDragEnd={(e) => props.onDragEnd(e)}
      >
        <ButtonDrag type="button"></ButtonDrag>
      </DragContainer> */}
      {/* <ButtonDrag
        type="button"
        draggable={true}
        onDragStart={(e) => props.onDragStart(e, props.index)}
        onDragEnter={(e) => props.onDragEnter(e, props.index)}
        onDragOver={(e) => props.onDragOver(e, props.index)}
        onDragLeave={(e) => props.onDragLeave(e, props.index)}
        onDrop={(e) => props.onDrop(e, props.index)}
        onDragEnd={(e) => props.onDragEnd(e)}
      ></ButtonDrag> */}
      <DragDiv
        draggable={true}
        onDragStart={(e) => props.onDragStart(e, props.index)}
        onDragEnter={(e) => props.onDragEnter(e, props.index)}
        onDragOver={(e) => props.onDragOver(e, props.index)}
        onDragLeave={(e) => props.onDragLeave(e, props.index)}
        onDrop={(e) => props.onDrop(e, props.index)}
        onDragEnd={(e) => props.onDragEnd(e)}
      ></DragDiv>
    </Li>
  );
};
export const ToDoDisplayPanel = styled.div`
  height: 50px;
  padding: 4px 20px 0;
  color: ${(props) => props.theme.fontColorSecondary};
  font-size: ${font.size.secondary};
  position: relative;
  @media (max-width: 576px) {
    padding: 4px 15px 0;
    height: 47px;
    font-size: ${font.size.mobileDefault};
  }
`;
export interface ToDoProps {
  ToDoItem: React.ReactNode;
  filterButtonList: JSX.Element[];
  toggleIsComplete: (id: string) => void;
  deleteItem: (id: string) => void;
  itemsLeft: number;
  clearAllItems: () => void;
}
export const ItemCountDisplay = styled.p``;
export const ButtonClear = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: ${(props) => props.theme.fontColorSecondary};
  &:hover {
    color: ${(props) => props.theme.fontColorDefault};
  }
`;
export const ToDoFilter = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 16px;
  @media (max-width: 576px) {
    background: ${(props) => props.theme.backgroundColorContainer};
    width: 100%;
    height: 32px;
    top: 130%;
    text-align: center;
    padding-top: 16px;
    border-radius: ${borderRadius.default};
    box-shadow: ${(props) => props.theme.dropShadow};
  }
`;

export const ToDo = (props: ToDoProps) => {
  const itemString = props.itemsLeft !== 1 ? "items" : "item";

  return (
    <ToDoContainer>
      <Ul role="list" aria-labelledby="list-heading">
        {props.ToDoItem}
      </Ul>
      <ToDoDisplayPanel>
        <RowSpaceBetween>
          <ItemCountDisplay>
            {props.itemsLeft} {itemString} left
          </ItemCountDisplay>
          <ButtonClear type="button" onClick={() => props.clearAllItems()}>
            Clear Completed
          </ButtonClear>
        </RowSpaceBetween>
        <ToDoFilter>{props.filterButtonList}</ToDoFilter>
      </ToDoDisplayPanel>
    </ToDoContainer>
  );
};
