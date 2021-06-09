import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";

import { COLORS } from "~src/colors";
import { ListOptions, SortList, PopupMenu } from "~components";
import { sortVariant } from "~src/utils/utils";
import { useStateFlags } from "~src/hooks/useStateFlags";

const StyledContainer = styled.div`
  font-family: "Segoe UI";
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  width: 100%;
`;

const StyledTaskContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${(props) => props.theme.color};
`;

const StyledSortContainer = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color};
`;

const StyledTitle = styled.h2`
  text-align: end;
  padding-right: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
`;

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

export const MainHeader: React.FC = () => {
  const { t } = useTranslation();
  const { flag: isShowOptions, toggleFlag: toggleOptions, setFlagFalse: setIsShowOptions } = useStateFlags(false);
  const { flag: isShowSortList, toggleFlag: toggleSortList, setFlagFalse: setIsShowSortList } = useStateFlags(false);

  const onCloseListOptions = useCallback(() => {
    if (isShowOptions) {
      setIsShowOptions();
    }
  }, [isShowOptions, setIsShowOptions]);

  const onCloseSortList = useCallback(() => {
    if (isShowSortList) {
      setIsShowSortList();
    }
  }, [isShowSortList, setIsShowSortList]);
  return (
    <StyledContainer>
      <StyledTaskContainer>
        <StyledTitle>{t("Tasks")}</StyledTitle>
        <StyledButton onClick={toggleOptions}>
          <StyledIcon className="fa fa-ellipsis-h" />
        </StyledButton>
        {isShowOptions ? (
          <PopupMenu onClose={onCloseListOptions}>
            <ListOptions />
          </PopupMenu>
        ) : null}
      </StyledTaskContainer>
      <StyledSortContainer>
        <StyledButton onClick={toggleSortList}>
          <StyledIcon className="fa fa-arrows-v" />
          {t("Sorting")}
        </StyledButton>
        {isShowSortList ? (
          <PopupMenu onClose={onCloseSortList}>
            <SortList sortVariant={sortVariant} />
          </PopupMenu>
        ) : null}
      </StyledSortContainer>
    </StyledContainer>
  );
};
