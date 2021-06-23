import React from "react";

import { StyledItem, StyledIcon } from "./SidebarLeftFooterItem.styled";

export interface SidebarLeftFooterItemProps {
  icon: string;
}

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
