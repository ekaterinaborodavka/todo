import React from "react";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";

import { SortListItem, SortListItemProps } from "~components/SortListItem/SortListItem";
import { COLORS } from "~src/colors";

const StyledListContainer = styled.div`
  width: 20%;
  border-radius: 2px;
  box-shadow: 0px 4px 8px 2px rgba(45, 47, 51, 0.2);
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledTitle = styled.h4`
  color: ${COLORS.optionText};
  font-family: Segoe UI;
  border-bottom: 1px solid ${COLORS.lightGrey};
  font-weight: 600;
  text-align: center;
  padding: 1rem;
  margin: 0;
`;

export interface SortListProps {
  sortVariant: SortListItemProps[];
}

export const SortList: React.FC<SortListProps> = ({ sortVariant }) => {
  const { t } = useTranslation();
  return (
    <StyledListContainer>
      <StyledTitle>{t("SortingOrder")}</StyledTitle>
      <StyledList>
        {sortVariant.map((item) => (
          <SortListItem key={item.id} {...item} />
        ))}
      </StyledList>
    </StyledListContainer>
  );
};
