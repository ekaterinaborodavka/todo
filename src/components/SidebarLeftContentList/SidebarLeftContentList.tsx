import React from "react";
import styled from "styled-components/macro";

import {
  SidebarLeftContentItem,
  SidebarLeftContentItemProps,
} from "~components/SidebarLeftContentItem/SidebarLeftContentItem";

const StyledList = styled.ul`
  padding-left: 0rem;
`;

export interface SidebarLeftListProps {
  content: SidebarLeftContentItemProps[];
}

export const SidebarLeftContentList: React.FC<SidebarLeftListProps> = ({ content }) => {
  return (
    <StyledList>
      {content.map((item, index) => (
        <SidebarLeftContentItem key={index} {...item} />
      ))}
    </StyledList>
  );
};
