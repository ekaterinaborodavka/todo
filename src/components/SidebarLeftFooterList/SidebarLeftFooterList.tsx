import React, { useContext } from "react";
import styled from "styled-components/macro";

import { SidebarLeftContext } from "~src/context/sidebarLeftContext";
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
  const { isSidebarOpened } = useContext(SidebarLeftContext);

  return (
    <StyledList isOpened={isSidebarOpened}>
      {contentFooter.map((content, index) => (
        <SidebarLeftFooterItem key={index} {...content} />
      ))}
    </StyledList>
  );
};
