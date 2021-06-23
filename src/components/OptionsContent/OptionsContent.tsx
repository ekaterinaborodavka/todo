import React from "react";

import { StyledContainer, StyledTitle } from "./OptionsContent.styled";

interface OptionsContentProps {
  title: string;
  width?: string;
}

export const OptionsContent: React.FC<OptionsContentProps> = ({ title, children, width }) => {
  return (
    <StyledContainer width={width}>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledContainer>
  );
};
