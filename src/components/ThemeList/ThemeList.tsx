import React from "react";

import { ThemeListItem } from "~components";
import { ThemeListProps } from "~src/types";

import { StyledItem } from "./ThemeList.styled";

export const ThemeList: React.FC<ThemeListProps> = ({ themes }) => {
  return (
    <StyledItem>
      {themes.map((theme) => (
        <ThemeListItem key={theme.theme} {...theme} />
      ))}
    </StyledItem>
  );
};
