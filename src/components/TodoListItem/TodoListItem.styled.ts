import styled from "styled-components/macro";
import { COLORS } from "~src/colors";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  border-bottom: 1px solid ${COLORS.lightGrey};
  box-shadow: inset 0 1px 0 0 ${COLORS.lightGrey};
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.lightGrey};
  }
`;

const StyledButton = styled.button`
  width: 100%;
  color: inherit;
  text-align: left;
  padding: 1.2rem 1rem;
  background-color: transparent;
  border: 1px solid transparent;
  color: ${(props) => props.theme.color};
  cursor: pointer;
`;

const StyledIcon = styled.i`
  margin: 0 0.5rem;
  color: ${(props) => props.theme.color};
`;

export { StyledContainer, StyledButton, StyledIcon };
