import styled from "styled-components";
import { COLORS } from "~src/colors";

const StyledFooter = styled.div`
  width: 100%;
  min-height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.bgDetailsMenu};
  border-top: 1px solid ${COLORS.detailsMenuBorder};
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem;
  box-sizing: border-box;
  color: ${COLORS.detailsTextColor};
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
`;

const StyledIcon = styled.i`
  color: ${COLORS.detailsTextColor};
`;

export { StyledFooter, StyledButton, StyledIcon };
