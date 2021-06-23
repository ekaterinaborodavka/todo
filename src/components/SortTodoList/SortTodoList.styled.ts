import styled from "styled-components";
import { COLORS } from "~src/colors";

const StyledSortContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color};
`;

const StyledSortOptions = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-left: 5px;
  color: ${(props) => props.theme.color};
`;

const SortOptionButton = styled.button`
  border: none;
  background-color: ${COLORS.white};
  font-size: 15px;
  &:hover,
  :focus {
    background-color: ${COLORS.lightGrey};
  }
  &:active {
    background-color: ${COLORS.lightGrey};
  }
`;

const SortOptionIcon = styled.i`
  font-size: 25px;
  font-weight: 500;
  color: ${COLORS.grey};
  padding: 5px;
  -webkit-text-stroke: 1px ${COLORS.white};
`;
const SortOptionClearIcon = styled.i`
  font-size: 25px;
  font-weight: 500;
  color: ${COLORS.grey};
  padding: 5px;
  -webkit-text-stroke: 4px ${COLORS.white};
`;

export { StyledSortContainer, StyledSortOptions, SortOptionButton, SortOptionIcon, SortOptionClearIcon };
