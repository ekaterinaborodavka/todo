import styled from "styled-components/macro";
import { COLORS } from "~src/colors";

const StyledNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 33%;
  padding: 0.7rem;
  background-color: transparent;
  border: 1px solid transparent;
  &:hover {
    background-color: ${COLORS.lightGrey};
    opacity: 0.5;
  }
  &:active {
    background-color: ${COLORS.grey};
  }
`;

const StyledIcons = styled.i`
  padding: 0.3rem;
  font-size: 1.2rem;
  color: white;
  -webkit-text-stroke: ${(props) => `0.5px ${props.theme.color}`};
`;

const StyledIconsThin = styled.i`
  padding: 0.3rem;
  font-size: 1.2rem;
  color: white;
  -webkit-text-stroke: ${(props) => `2px ${props.theme.color}`};
`;

export { StyledNavContainer, StyledButton, StyledIcons, StyledIconsThin };
