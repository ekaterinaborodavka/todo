import React, { useContext } from "react";

import { SidebarLeftContext } from "~src/context/sidebarLeftContext";
import { SidebarLeftFooterItem, SidebarLeftFooterItemProps } from "~components";

import { StyledList } from "./SidebarLeftFooterList.styled";

export interface SidebarFooterListProps {
  contentFooter: SidebarLeftFooterItemProps[];
}

export const SidebarLeftFooterList: React.FC<SidebarFooterListProps> = ({ contentFooter }) => {
  const { isSidebarOpened } = useContext(SidebarLeftContext);

  return (
    <StyledList isOpened={isSidebarOpened}>
      {contentFooter.map((content, index) => (
        <SidebarLeftFooterItem key={index} {...content} />
      ))}
    </StyledList>
  );
};
