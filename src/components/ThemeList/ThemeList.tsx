import React from "react";
import styled from "styled-components/macro";

import { ThemeListItem, ThemeListItemProps } from "~components";

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export interface ThemeListProps {
  thems: ThemeListItemProps[];
}

export const ThemeList: React.FC<ThemeListProps> = ({ thems }) => {
  return (
    <StyledItem>
      {thems.map((item, index) => (
        <ThemeListItem key={index} {...item} />
      ))}
    </StyledItem>
  );
};
