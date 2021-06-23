import styled from "styled-components";
import { COLORS } from "../../colors";

const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
  height: 100%;
  overflow: auto;
`;

const StyledBGContainer = styled.div`
  padding: 0 2rem;
  height: 100%;
  background: linear-gradient(
    180deg,
    ${COLORS.white},
    ${COLORS.white} 52px,
    ${COLORS.lightGrey} 52px,
    ${COLORS.lightGrey} 52px
  );
  background-size: 100% 53px;
  box-shadow: inset 0 1px 0 0 ${COLORS.lightGrey};
`;

const StyledSearchTitle = styled.h3`
  color: ${(props) => props.theme.color};
`;

export { StyledContainer, StyledBGContainer, StyledSearchTitle };
