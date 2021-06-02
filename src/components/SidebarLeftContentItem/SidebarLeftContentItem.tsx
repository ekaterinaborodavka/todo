import React, { useContext } from "react";
import styled from "styled-components/macro";

import { COLORS } from "~src/colors";
import { SidebarContext } from "~src/context/sidebarContext";

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
  margin-left: 1rem;
  width: 85%;
  white-space: nowrap;
`;

const StyledCount = styled.div`
  width: 10%;
`;

const StyledContent = styled.div<{ isOpened: boolean }>`
  width: 100%;
  display: ${(props) => (props.isOpened ? "flex" : "none")};
`;

export interface SidebarLeftContentItemProps {
  id?: number;
  icon: string;
  title: string;
  color: string;
}

export const SidebarLeftContentItem: React.FC<SidebarLeftContentItemProps> = ({ color, icon, title }) => {
  const { isSidebarOpened } = useContext(SidebarContext);

  return (
    <StyledItem>
      <div>
        <StyledIcon color={color} className={icon} />
      </div>
      <StyledContent isOpened={isSidebarOpened}>
        <StyledTitle color={color}>{title}</StyledTitle>
        <StyledCount></StyledCount>
      </StyledContent>
    </StyledItem>
  );
};
