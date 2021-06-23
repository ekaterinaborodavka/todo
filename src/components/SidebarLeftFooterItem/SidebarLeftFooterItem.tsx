import React from "react";

import { SidebarLeftFooterItemProps } from "~src/types";

import { StyledItem, StyledIcon } from "./SidebarLeftFooterItem.styled";

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
