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
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.isOpened ? "row" : "column")};
`;

export interface SidebarFooterListProps {
  content: SidebarLeftFooterItemProps[];
}

export const SidebarLeftFooterList: React.FC<SidebarFooterListProps> = ({ content }) => {
  const { isSidebarOpened } = useContext(SidebarContext);

  return (
    <StyledList isOpened={isSidebarOpened}>
      {content.map((item, index) => (
        <SidebarLeftFooterItem key={index} {...item} />
      ))}
    </StyledList>
  );
};
