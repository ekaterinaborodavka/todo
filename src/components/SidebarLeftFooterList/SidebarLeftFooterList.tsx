import React from "react";
import styled from "styled-components/macro";

import {
  SidebarLeftFooterItem,
  SidebarLeftFooterItemProps,
} from "~components/SidebarLeftFooterItem/SidebarLeftFooterItem";

export interface StyledListProps {
  direction?: boolean;
}

const StyledList = styled.div<{ direction: boolean }>`
  padding-left: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.direction ? "row" : "column")};
`;

export interface SidebarFooterListProps {
  content: SidebarLeftFooterItemProps[];
  open: boolean;
}

export const SidebarLeftFooterList: React.FC<SidebarFooterListProps> = ({ content, open }) => {
  return (
    <StyledList direction={open}>
      {content.map((item) => (
        <SidebarLeftFooterItem key={item.id} {...item} />
      ))}
    </StyledList>
  );
};
