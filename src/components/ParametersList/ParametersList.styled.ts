import styled from "styled-components/macro";
import { COLORS } from "~src/colors";

const StyledTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 600;
  color: ${COLORS.sidebarRightListColor};
`;

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
`;

const StyledContainer = styled.div`
  margin: 1.5rem 0;
`;

export { StyledTitle, StyledList, StyledContainer };
