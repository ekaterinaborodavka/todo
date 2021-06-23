import React from "react";

import { ParametersListItem } from "~components";
import { ParametersItem } from "~src/types";

import { StyledContainer, StyledList, StyledTitle } from "./ParametersList.styled";

interface ParametersListProps {
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
