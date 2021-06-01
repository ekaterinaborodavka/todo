import React from "react";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";

import { COLORS } from "~src/colors";

const StyledIcon = styled.i`
  color: ${(props) => props.color};
`;

const StyledItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 1.5rem auto;
  &:hover {
    background-color: ${COLORS.white};
  }
`;

const StyledTitle = styled.span`
  color: ${(props) => props.color};
  margin-left: 1rem;
`;

const StyledTitleContainer = styled.div`
  width: 80%;
`;

export interface SidebarLeftContentItemProps {
  id?: number;
  icon: string;
  title: string;
  color: string;
}

export const SidebarLeftContentItem: React.FC<SidebarLeftContentItemProps> = ({ color, icon, title }) => {
  const { t } = useTranslation();
  return (
    <StyledItem>
      <div>
        <StyledIcon color={color} className={icon} />
      </div>
      <StyledTitleContainer color={color}>
        <StyledTitle color={color}>{t(title)}</StyledTitle>
      </StyledTitleContainer>
      <div></div>
    </StyledItem>
  );
};
