import React, { useContext } from "react";
import styled from "styled-components/macro";

import { SidebarContext } from "~src/context/sidebarContext";
import {
  SidebarLeftFooterItem,
  SidebarLeftFooterItemProps,
} from "~components/SidebarLeftFooterItem/SidebarLeftFooterItem";

export interface StyledListProps {
  direction?: boolean;
}

const StyledList = styled.div<{ isOpened: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.isOpened ? "row" : "column")};
`;

export interface SidebarFooterListProps {
  contentFooter: SidebarLeftFooterItemProps[];
}

export const SidebarLeftFooterList: React.FC<SidebarFooterListProps> = ({ contentFooter }) => {
  const { isSidebarOpened } = useContext(SidebarContext);

  return (
    <StyledList isOpened={isSidebarOpened}>
      {contentFooter.map((content, index) => (
        <SidebarLeftFooterItem key={index} {...content} />
      ))}
    </StyledList>
  );
};
