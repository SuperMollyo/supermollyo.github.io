import React, { useState } from "react";
import styled from "styled-components";
import { borderRadius, color, font } from "../styles/StyleTokens";

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-gap: 24px;
  height: 64px;
  width: 100%;
  border-radius: ${borderRadius.default};
  border: 1px solid transparent;
  background: ${(props) => props.theme.backgroundColorContainer};
  align-items: center;
`;
export const CircleIcon = styled.div`
  margin-left: 20px;
  /* margin-right: 24px; */
  width: 24px;
  height: 24px;
  background: ${(props) => props.theme.backgroundColorContainer};
  border-radius: 100%;
  border: 1px solid ${(props) => props.theme.borderColor};
`;
export const InputTextBox = styled.input.attrs({ type: "text" })`
  padding: 0;
  border: none;
  font-family: ${font.family.default}, sans-serif;
  font-size: ${font.size.default};
  color: ${({ theme }) => theme.fontColorDefault};
  background: ${(props) => props.theme.backgroundColorContainer};
  width: 100%;
  height: 100%;
  &::placeholder {
    color: ${color.darkGrayishBlue};
  }
  &:focus-visible {
    border: none;
    outline: none;
    filter: drop-shadow(
      0px 1px 8px ${(props) => props.theme.backgroundColorContainer}
    );
    background: linear-gradient(
      45deg,
      ${(props) => props.theme.backgroundColorContainer},
      transparent,
      #626de13b
    );
  }
  &:hover {
    filter: drop-shadow(
      0px 1px 8px ${(props) => props.theme.backgroundColorContainer}
    );
    background: linear-gradient(
      45deg,
      ${(props) => props.theme.backgroundColorContainer},
      transparent,
      #626de13b
    );
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
      <InputContainer>
        <CircleIcon></CircleIcon>
        <InputTextBox
          type="text"
          className="input"
          value={name}
          placeholder={placeholderText}
          onChange={handleChange}
        />
      </InputContainer>
    </form>
  );
};
