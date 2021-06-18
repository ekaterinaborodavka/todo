import React from "react";
import styled from "styled-components/macro";

import { CheckButton } from "~components";
import { COLORS } from "~src/colors";
import { ParametersItem } from "~src/types";

const StyledListItem = styled.li`
  font-family: "Segoe UI";
  list-style: none;
  color: ${COLORS.sidebarRightListColor};
  margin: 0.5rem 0;
`;

const StyledTitleItem = styled.div`
  font-weight: 600;
  padding: 0.5rem 0;
  font-size: 0.9rem;
`;

interface ParametersListItemProps {
  item: ParametersItem;
  params: ParametersItem[];
  setParams: React.Dispatch<React.SetStateAction<ParametersItem[]>>;
}

export const ParametersListItem: React.FC<ParametersListItemProps> = ({ item, params, setParams }) => {
  const { title, check, id } = item;
  return (
    <StyledListItem>
      <StyledTitleItem>{title}</StyledTitleItem>
      <CheckButton params={params} setParams={setParams} status={check} id={id} />
    </StyledListItem>
  );
};
