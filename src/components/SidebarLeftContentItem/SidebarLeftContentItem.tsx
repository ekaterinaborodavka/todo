import React from "react";
import styled from "styled-components/macro";

import { COLORS } from "~src/colors";

const StyledIcon = styled.i<{ color: string }>`
  color: ${(props) => props.color};
`;

const StyledItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0rem auto;
  padding: 0.5rem 1.5rem;
  &:hover {
    background-color: ${COLORS.lightGrey};
  }
`;

const StyledTitle = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  margin-left: 2rem;
  width: 85%;
  white-space: nowrap;
`;

const StyledCount = styled.div`
  width: 10%;
`;

const StyledContent = styled.div`
  width: 100%;
`;

export interface SidebarLeftContentItemProps {
  icon: string;
  title: string;
  color: string;
}

export const SidebarLeftContentItem: React.FC<SidebarLeftContentItemProps> = ({ color, icon, title }) => {
  return (
    <StyledItem>
      <div>
        <StyledIcon color={color} className={icon} />
      </div>
      <StyledContent>
        <StyledTitle color={color}>{title}</StyledTitle>
        <StyledCount></StyledCount>
      </StyledContent>
    </StyledItem>
  );
};
