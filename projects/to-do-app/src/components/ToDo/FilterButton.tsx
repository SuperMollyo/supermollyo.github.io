import styled from "styled-components";
import { font, color } from "../../styles/StyleTokens";
export const ButtonFilterAction = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.fontColorSecondary};
  font-weight: ${font.weight.bold};
  &[aria-pressed="true"] {
    color: ${color.brightBlue};
  }
  &:hover {
    color: ${(props) => props.theme.fontColorDefault};
  }
  @media (max-width: 576px) {
    font-size: ${font.size.secondary};
  }
`;
interface FilterButtonProps {
  name: string;
  isPressed: boolean;
  filterItems: (name: string) => void;
}
export const FilterButton = (props: FilterButtonProps) => {
  return (
    <ButtonFilterAction
      type="button"
      aria-pressed={props.isPressed}
      onClick={() => props.filterItems(props.name)}
    >
      {props.name}
    </ButtonFilterAction>
  );
};
