import React from "react";
import styled from "styled-components/macro";

import { COLORS } from "~src/colors";

export interface SidebarLeftFooterItemProps {
  icon: string;
}

const StyledIcon = styled.i`
  color: ${COLORS.grey};
`;

const StyledItem = styled.div`
  padding: 0.5rem 1.2rem;
  &:hover {
    background-color: ${COLORS.lightGrey};
  }
`;

export const SidebarLeftFooterItem: React.FC<SidebarLeftFooterItemProps> = ({ icon }) => {
  return (
    <StyledItem>
      {/* TODO: add href */}
      <a href="#">
        <StyledIcon className={icon} />
      </a>
    </StyledItem>
  );
};
