import React from "react";
import styled from "styled-components";
import iconCheck from "../images/icon-check.svg";
import iconX from "../images/icon-cross.svg";
import { borderRadius, font, gradient } from "../styles/StyleTokens";
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
export const ButtonDelete = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  transition: 1s;
  background-image: url(${iconX});
  background-repeat: no-repeat;
  width: 26px;
  height: 26px;
  &:hover {
    filter: drop-shadow(2px 2px 3px black);
    transform: scale(1.1);
  }
  @media (max-width: 576px) {
    width: 12px;
    height: 12px;
    background-size: 12px;
  }
`;
export const CheckboxRound = (props: ToDoItemProps) => {
  return (
    <div>
      <InputCheckBox
        type="checkbox"
        id={props.id}
        defaultChecked={props.isComplete}
      />
      <LabelRound htmlFor={props.id}>{props.name}</LabelRound>
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
  display: flex;
  justify-content: space-between;
  height: 25px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding: 20px;
  &:first-child {
    border-top: none;
  }
  @media (max-width: 576px) {
    height: 22px;
    padding: 15px;
  }
`;
export const ToDoItem = (props: ToDoItemProps) => {
  return (
    <Li>
      <CheckboxRound
        id={props.id}
        name={props.name}
        isComplete={props.isComplete}
      />
      <ButtonDelete></ButtonDelete>
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
  toDoItems: ToDoItemProps[];
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
export const ButtonFilterAction = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.fontColorSecondary};
  font-weight: ${font.weight.bold};
  &:hover {
    color: ${(props) => props.theme.fontColorDefault};
  }
  @media (max-width: 576px) {
    font-size: ${font.size.secondary};
  }
`;
export const ToDo = (props: ToDoProps) => {
  return (
    <ToDoContainer>
      <Ul role="list" aria-labelledby="list-heading">
        {props.toDoItems.map((toDoItem: ToDoItemProps, index: number) => (
          <ToDoItem
            key={index}
            id={toDoItem.id}
            name={toDoItem.name}
            isComplete={toDoItem.isComplete}
          />
        ))}
      </Ul>
      <ToDoDisplayPanel>
        <RowSpaceBetween>
          <ItemCountDisplay>
            {props.toDoItems.length} items left
          </ItemCountDisplay>
          <ButtonClear>Clear Completed</ButtonClear>
        </RowSpaceBetween>
        <ToDoFilter>
          <ButtonFilterAction>All</ButtonFilterAction>
          <ButtonFilterAction>Active</ButtonFilterAction>
          <ButtonFilterAction>Completed</ButtonFilterAction>
        </ToDoFilter>
      </ToDoDisplayPanel>
    </ToDoContainer>
  );
};
