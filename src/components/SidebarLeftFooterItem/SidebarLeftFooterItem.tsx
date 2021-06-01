import React from "react";
import styled from "styled-components/macro";

import { COLORS } from "~src/colors";

export interface SidebarLeftFooterItemProps {
  id?: number;
  icon: string;
}

const StyledIcon = styled.i`
  color: ${COLORS.grey};
`;

const StyledItem = styled.div`
  margin: 1rem 0rem;
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
