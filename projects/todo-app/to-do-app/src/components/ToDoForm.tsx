import React, { useState } from "react";
import styled from "styled-components";
import { borderRadius, font } from "../styles/StyleTokens";

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
`;
export interface ToDoFormProps {}
export const ToDoForm = (props: ToDoFormProps) => {
  const [name, setName] = useState("Use hooks!");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const addTask = (name: string) => {
    alert(name);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) return;
    addTask(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputTextBox
        type="text"
        className="input"
        value={name}
        onChange={handleChange}
      />
    </form>
  );
};
