import React from "react";
import styled from "styled-components/macro";

import { ParametersListItem } from "~components";
import { ParametersItem } from "~src/types";
import { COLORS } from "~src/colors";

const StyledTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 600;
  color: ${COLORS.sidebarRightListColor};
`;

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
`;

const StyledContainer = styled.div`
  margin: 1.5rem 0;
`;

export interface ParametersListProps {
  parameters: ParametersItem[];
  title: string;
  setParams: React.Dispatch<React.SetStateAction<ParametersItem[]>>;
}

export const ParametersList: React.FC<ParametersListProps> = ({ parameters, title, setParams }) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledList>
        {parameters.map((param, index) => (
          <ParametersListItem key={index} item={param} params={parameters} setParams={setParams} />
        ))}
      </StyledList>
    </StyledContainer>
  );
};
