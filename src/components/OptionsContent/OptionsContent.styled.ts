import styled from "styled-components";
import { COLORS } from "~src/colors";

const StyledContainer = styled.div<{ width: string | undefined; right: string | undefined }>`
  width: ${(props) => (props.width ? props.width : "200px")};
  position: absolute;
  top: 1rem;
  right: ${(props) => (props.right ? props.right : "-7rem")};
  background-color: ${COLORS.white};
  border-radius: 2px;
  box-shadow: 0px 4px 8px 2px rgba(45, 47, 51, 0.2);
  z-index: 10;
`;

const StyledTitle = styled.h4`
  text-align: center;
  border-bottom: 1px solid ${COLORS.lightGrey};
  padding: 1rem;
  margin: 0;
  color: ${COLORS.optionText};
  font-weight: 600;
`;

export { StyledContainer, StyledTitle };
