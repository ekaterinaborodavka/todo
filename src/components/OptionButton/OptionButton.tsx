import React from "react";
import styled from "styled-components/macro";

import { COLORS } from "~src/colors";

const StyledIcon = styled.i`
  padding: 0.5rem;
  font-size: 1.2rem;
  -webkit-text-stroke: 1px ${COLORS.white};
  color: inherit;
`;

const StyledButton = styled.button`
  border: 1px solid transparent;
  background-color: ${COLORS.white};
  &:hover {
    background-color: ${COLORS.lightGrey};
  }
  display: flex;
  align-items: center;
  color: inherit;
`;

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
