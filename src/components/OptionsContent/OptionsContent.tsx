import React from "react";

import { StyledContainer, StyledTitle } from "./OptionsContent.styled";

interface OptionsContentProps {
  title: string;
  width?: string;
  right?: string;
}

export const OptionsContent: React.FC<OptionsContentProps> = ({ title, children, width, right }) => {
  return (
    <StyledContainer width={width} right={right}>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledContainer>
  );
};
