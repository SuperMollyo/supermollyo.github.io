import styled from "styled-components";
import iconX from "../../images/icon-cross.svg";
import iconDrag from "../../images/icon-drag.svg";
import { Li } from "../Global";
import { RoundCheckbox } from "./RoundCheckbox";

export interface ToDoItemProps {
  name: string;
  isComplete: boolean;
  id: string;
}

export const DivDrag = styled.div`
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

export const ToDoItem = (props: {
  toDoItem: ToDoItemProps;
  toggleIsComplete: (id: string) => void;
  deleteItem: (id: string, isComplete: boolean) => void;
  onDragStart: (e: React.DragEvent<HTMLElement>, index: number) => void;
  onDragEnter: (e: React.DragEvent<HTMLElement>, index: number) => void;
  onDragOver: (e: React.DragEvent<HTMLElement>, index: number) => void;
  onDragLeave: (e: React.DragEvent<HTMLElement>, index: number) => void;
  onDrop: (e: React.DragEvent<HTMLElement>, index: number) => void;
  onDragEnd: (e: React.DragEvent<HTMLElement>) => void;
  index: number;
}) => {
  return (
    <Li>
      <RoundCheckbox
        toDoItem={props.toDoItem}
        toggleFunction={props.toggleIsComplete}
      />

      <ButtonDelete
        type="button"
        onClick={() =>
          props.deleteItem(props.toDoItem.id, props.toDoItem.isComplete)
        }
        aria-label="Delete Item"
      ></ButtonDelete>
      <DivDrag
        draggable={true}
        onDragStart={(e) => props.onDragStart(e, props.index)}
        onDragEnter={(e) => props.onDragEnter(e, props.index)}
        onDragOver={(e) => props.onDragOver(e, props.index)}
        onDragLeave={(e) => props.onDragLeave(e, props.index)}
        onDrop={(e) => props.onDrop(e, props.index)}
        onDragEnd={(e) => props.onDragEnd(e)}
      ></DivDrag>
    </Li>
  );
};
