import styled from "styled-components/macro";
import { COLORS } from "~src/colors";

const StyledIconButton = styled.button`
  border: 1px solid transparent;
  background-color: transparent;
  margin: 1rem 0 1rem 0;
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const StyledIcon = styled.i`
  font-size: 1.4rem;
  -webkit-text-stroke: 3px ${COLORS.white};
  color: ${(props) => props.theme.color};
  margin-right: 1rem;
`;

const StyledTitle = styled.h2`
  color: ${(props) => props.theme.color};
  font-size: 1.1rem;
  font-weight: 500;
`;

export { StyledIconButton, StyledIcon, StyledTitle };
