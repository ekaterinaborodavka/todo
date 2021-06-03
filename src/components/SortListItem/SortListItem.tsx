import React from "react";
import styled from "styled-components/macro";
import { COLORS } from "~src/colors";

const StyledButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid transparent;
  background-color: ${COLORS.white};
  &:hover {
    background-color: ${COLORS.lightGrey};
  }
`;

const StyledTitle = styled.span`
  color: ${COLORS.optionText};
  font-family: Segoe UI;
  padding: 0.5rem;
`;

const StyledIcon = styled.i`
  width: 5%;
  color: ${COLORS.grey};
`;

export interface SortListItemProps {
  id?: number;
  title: string;
  icon: string;
}

export const SortListItem: React.FC<SortListItemProps> = ({ title, icon }) => {
  return (
    <li>
      <StyledButton>
        <StyledIcon className={icon} />
        <StyledTitle>{title}</StyledTitle>
      </StyledButton>
    </li>
  );
};
