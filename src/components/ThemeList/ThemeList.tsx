import React from "react";

import { ThemeListItem, ThemeListItemProps } from "~components";

import { StyledItem } from "./ThemeList.styled";

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
