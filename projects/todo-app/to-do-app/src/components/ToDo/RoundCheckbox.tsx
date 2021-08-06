import styled from "styled-components";
import { font, gradient } from "../../styles/StyleTokens";
import iconCheck from "../../images/icon-check.svg";
import { ToDoItemProps } from "./ToDoItem";

export const LabelRound = styled.label`
  cursor: pointer;
  color: ${(props) => props.theme.fontColorDefault};
  font-size: ${font.size.default};
  @media (max-width: 576px) {
    font-size: ${font.size.mobileDefault};
  }
`;
export const InputCheckBox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  height: 0px;
  width: 0px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  margin: 0;
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
      margin-right: 12px;
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
export const RoundCheckbox = (props: {
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
