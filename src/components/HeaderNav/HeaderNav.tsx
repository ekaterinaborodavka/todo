import React from "react";
import styled from "styled-components/macro";

import { COLORS } from "~src/colors";

const StyledNavContainer = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 33%;
  padding: 0.7rem;
  background-color: transparent;
  border: 1px solid transparent;
  &:hover {
    background-color: ${COLORS.headerButtonHover};
  }
`;

const StyledIcons = styled.i`
  font-size: 1.2rem;
  color: white;
  -webkit-text-stroke: ${(props) => `0.5px ${props.theme.color}`};
`;

const StyledIconsThin = styled.i`
  font-size: 1.2rem;
  color: white;
  -webkit-text-stroke: ${(props) => `2px ${props.theme.color}`};
`;

export const HeaderNav: React.FC = () => {
  return (
    <StyledNavContainer>
      <StyledButton type="button">
        <StyledIconsThin className="fa fa-cog" />
      </StyledButton>
      <StyledButton type="button">
        <StyledIconsThin className="fa fa-question" />
      </StyledButton>
      <StyledButton type="button">
        <StyledIcons className="fa fa-television" />
      </StyledButton>
    </StyledNavContainer>
  );
};
