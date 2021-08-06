import React, { useState } from "react";
import styled from "styled-components";
import { borderRadius, color, font } from "../../styles/StyleTokens";

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-gap: 29px;
  height: 64px;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 23px;
  border-radius: ${borderRadius.default};
  border: 1px solid transparent;
  background: ${(props) => props.theme.backgroundColorContainer};
  align-items: center;
  @media (max-width: 576px) {
    height: 48px;
    margin-top: 16px;
    margin-bottom: 10px;
    grid-gap: 8px;
  }
`;
export const CircleIcon = styled.div`
  margin-left: 20px;
  z-index: 1;
  width: 24px;
  height: 24px;
  background: ${(props) => props.theme.backgroundColorContainer};
  border-radius: 100%;
  border: 1px solid ${(props) => props.theme.borderColor};
  pointer-events: none;
  @media (max-width: 576px) {
    width: 20px;
    height: 20px;
    margin-left: 14px;
  }
`;
export const InputTextBox = styled.input.attrs({ type: "text" })`
  padding: 0;
  border: 1px solid transparent;
  border-radius: ${borderRadius.default};
  font-family: ${font.family.default}, sans-serif;
  font-size: ${font.size.default};
  color: ${({ theme }) => theme.fontColorDefault};
  background: ${(props) => props.theme.backgroundColorContainer};
  width: 100%;
  height: 100%;
  margin-left: -70px;
  padding-left: 70px;
  &::placeholder {
    color: ${color.darkGrayishBlue};
  }
  &:focus-visible {
    outline: none;
    border: 1px solid ${(props) => props.theme.fontColorPrimary};
    border-radius: ${borderRadius.default};
    filter: drop-shadow(1px 1px 2px ${(props) => props.theme.fontColorPrimary});
  }
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.fontColorPrimary};
    border-radius: ${borderRadius.default};
    filter: drop-shadow(1px 1px 2px ${(props) => props.theme.fontColorPrimary});
  }
  &:hover {
    filter: drop-shadow(1px 1px 2px ${(props) => props.theme.fontColorPrimary});
    border: 1px solid transparent;
    border-radius: ${borderRadius.default};
  }
  @media (max-width: 576px) {
    font-size: ${font.size.mobileDefault};
    margin-left: -50px;
    padding-left: 50px;
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
