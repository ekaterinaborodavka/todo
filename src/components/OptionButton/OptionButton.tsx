import React from "react";

import { OptionButtonProps } from "~src/types";

import { StyledButton, StyledIcon } from "./OptionButton.styled";

export const OptionButton: React.FC<OptionButtonProps> = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledIcon className="fa fa-ellipsis-h" />
    </StyledButton>
  );
};
