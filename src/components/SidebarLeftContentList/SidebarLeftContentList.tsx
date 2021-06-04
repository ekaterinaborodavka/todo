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
  contentSidebar: SidebarLeftContentItemProps[];
}

export const SidebarLeftContentList: React.FC<SidebarLeftListProps> = ({ contentSidebar }) => {
  return (
    <StyledList>
      {contentSidebar.map((content) => (
        <SidebarLeftContentItem key={content.title} {...content} />
      ))}
    </StyledList>
  );
};
