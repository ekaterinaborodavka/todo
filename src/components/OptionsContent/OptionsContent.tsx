import React from "react";

import { OptionsContentProps } from "~src/types";

import { StyledContainer, StyledTitle } from "./OptionsContent.styled";

export const OptionsContent: React.FC<OptionsContentProps> = ({ title, children, width }) => {
  return (
    <StyledContainer width={width}>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledContainer>
  );
};
