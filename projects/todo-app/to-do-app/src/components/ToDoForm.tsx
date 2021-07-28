import React, { useState } from "react";
import styled from "styled-components";
import { borderRadius, color, font } from "../styles/StyleTokens";

export const InputTextBox = styled.input.attrs({ type: "text" })`
  height: 64px;
  width: 100%;
  padding: 0;
  border-radius: ${borderRadius.default};
  border: 1px solid transparent;
  background: ${(props) => props.theme.backgroundColorContainer};
  font-family: ${font.family.default}, sans-serif;
  font-size: ${font.size.default};
  color: ${({ theme }) => theme.fontColorDefault};
  &::placeholder {
    color: ${color.darkGrayishBlue};
  }
`;
export interface ToDoFormProps {
  addToDoItem: (name: string) => void;
}

export const ToDoForm = (props: ToDoFormProps) => {
  const placeholderText: string = "Create a new todo...";
  const [name, setName] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) return;
    props.addToDoItem(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputTextBox
        type="text"
        className="input"
        value={name}
        placeholder={placeholderText}
        onChange={handleChange}
      />
    </form>
  );
};
