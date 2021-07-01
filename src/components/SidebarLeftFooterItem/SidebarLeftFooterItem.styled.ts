import styled from "styled-components/macro";
import { COLORS } from "~src/colors";

const StyledIcon = styled.i`
  color: ${COLORS.grey};
`;

const StyledItem = styled.div`
  padding: 0.5rem 1.2rem;
  &:hover {
    background-color: ${COLORS.lightGrey};
  }
`;

export { StyledIcon, StyledItem };
