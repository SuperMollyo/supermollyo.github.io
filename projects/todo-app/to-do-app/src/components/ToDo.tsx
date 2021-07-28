import React from "react";
import styled from "styled-components";
import iconCheck from "../images/icon-check.svg";
import iconX from "../images/icon-cross.svg";
import { borderRadius, font, gradient } from "../styles/StyleTokens";

export const LabelRound = styled.label`
  cursor: pointer;
  color: ${(props) => props.theme.fontColorDefault};
  font-size: ${font.size.default};
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
export const Ul = styled.ul`
  background: ${(props) => props.theme.backgroundColorContainer};
  border-radius: ${borderRadius.default};
  padding: 0;
`;
export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  height: 25px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  padding: 20px;
  &:first-child {
    border-top: none;
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

export interface ToDoProps {
  toDoItems: ToDoItemProps[];
}

export const ToDo = (props: ToDoProps) => {
  return (
    <div>
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
    </div>
  );
};
