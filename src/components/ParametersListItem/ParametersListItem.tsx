import React from "react";

import { CheckButton } from "~components";
import { ParametersListItemProps } from "~src/types";

import { StyledListItem, StyledTitleItem } from "./ParametersListItem.styled";

export const ParametersListItem: React.FC<ParametersListItemProps> = ({ item, params, setParams }) => {
  const { title, check, id } = item;
  return (
    <StyledListItem>
      <StyledTitleItem>{title}</StyledTitleItem>
      <CheckButton params={params} setParams={setParams} status={check} id={id} />
    </StyledListItem>
  );
};
