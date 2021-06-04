import React from "react";
import styled from "styled-components/macro";

import { ThemeListItem, ThemeListItemProps } from "~components";

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export interface ThemeListProps {
  themes: ThemeListItemProps[];
}

export const ThemeList: React.FC<ThemeListProps> = ({ themes }) => {
  return (
    <StyledItem>
      {themes.map((theme) => (
        <ThemeListItem key={theme.theme} {...theme} />
      ))}
    </StyledItem>
  );
};
