import React, { useContext } from "react";
import styled, { keyframes } from "styled-components/macro";
import { useTranslation } from "react-i18next";
import { ClickOutsideListener } from "~components";

import { SortListItem, SortListItemProps } from "~components/SortListItem/SortListItem";
import { COLORS } from "~src/colors";
import { MainTitleContext } from "~src/context/mainTitleContext";

const slideDown = keyframes`
0% {
  transform: translateY(-10%);
  opacity: 0;
}      
100% {
  transform: translateY(0%);
} 
`;

const StyledListContainer = styled.div<{ isShowSortList: boolean }>`
  width: 250px;
  border-radius: 2px;
  box-shadow: 0px 4px 8px 2px rgba(45, 47, 51, 0.2);
  display: ${(props) => (props.isShowSortList ? "block" : "none")};
  position: absolute;
  top: 100%;
  right: 15%;
  animation: ${slideDown} 0.5s linear;
  z-index: 10;
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
  const { isShowSortList, setIsShowSortList } = useContext(MainTitleContext);

  return (
    <ClickOutsideListener isShow={isShowSortList} setIsShow={setIsShowSortList}>
      <StyledListContainer isShowSortList={isShowSortList}>
        <StyledTitle>{t("SortingOrder")}</StyledTitle>
        <StyledList>
          {sortVariant.map((item, index) => (
            <SortListItem key={index} {...item} />
          ))}
        </StyledList>
      </StyledListContainer>
    </ClickOutsideListener>
  );
};
