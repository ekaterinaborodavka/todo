import React from "react";

import { StyledButton, StyledIcon } from "./OptionButton.styled";

interface OptionButtonProps {
  onClick: () => void;
}

export const OptionButton: React.FC<OptionButtonProps> = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledIcon className="fa fa-ellipsis-h" />
    </StyledButton>
  );
};
