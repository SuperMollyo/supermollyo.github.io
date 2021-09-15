import styled from "styled-components";
import { borderRadius, font } from "../../styles/StyleTokens";
import { RowSpaceBetween } from "../Global";

export const PanelToDoDisplay = styled.div`
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

export const ButtonClear = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: ${(props) => props.theme.fontColorSecondary};
  &:hover {
    color: ${(props) => props.theme.fontColorDefault};
  }
`;
export const DivFilter = styled.div`
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

export const ToDoDisplayPanel = (props: {
  filterButtonList: JSX.Element[];
  itemsLeft: number;
  clearAllItems: () => void;
}) => {
  const itemString = props.itemsLeft !== 1 ? "items" : "item";

  return (
    <PanelToDoDisplay>
      <RowSpaceBetween>
        <p>
          {props.itemsLeft} {itemString} left
        </p>
        <ButtonClear type="button" onClick={() => props.clearAllItems()}>
          Clear Completed
        </ButtonClear>
      </RowSpaceBetween>
      <DivFilter>{props.filterButtonList}</DivFilter>
    </PanelToDoDisplay>
  );
};
