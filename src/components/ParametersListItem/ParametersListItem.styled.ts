import styled from "styled-components/macro";
import { COLORS } from "~src/colors";

const StyledListItem = styled.li`
  font-family: "Segoe UI";
  list-style: none;
  color: ${COLORS.sidebarRightListColor};
  margin: 0.5rem 0;
`;

const StyledTitleItem = styled.div`
  font-weight: 600;
  padding: 0.5rem 0;
  font-size: 0.9rem;
`;

export { StyledListItem, StyledTitleItem };
