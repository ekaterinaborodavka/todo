import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import styled, { ThemeProvider } from "styled-components/macro";

import { COLORS } from "~src/colors";
import { MainTitleContext } from "~src/context/mainTitleContext";
import { ListOptions, SortList } from "~components";
import { sortVariant } from "~src/utils/utils";
import { theme } from "~src/theme/theme";
import { ThemeNames } from "~src/types";

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
  width: 90%;
  position: relative;
  color: ${(props) => props.theme.color};
`;

const StyledSortContainer = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  position: relative;
  color: ${(props) => props.theme.color};
`;

const StyledTitle = styled.h2`
  width: 10%;
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
  const [isShowOptions, setIsShowOptions] = useState(false);
  const [isShowSortList, setIsShowSortList] = useState(false);
  const [themeVariant, setThemeVariant] = useState(ThemeNames.blue);

  const toggleOptions = useCallback(() => {
    setIsShowOptions(!isShowOptions);
  }, [setIsShowOptions, isShowOptions]);

  const toggleSortList = useCallback(() => {
    setIsShowSortList(!isShowSortList);
  }, [setIsShowSortList, isShowSortList]);

  return (
    <MainTitleContext.Provider
      value={{ isShowOptions, setIsShowOptions, isShowSortList, setIsShowSortList, setThemeVariant, themeVariant }}
    >
      <ThemeProvider theme={theme[themeVariant]}>
        <StyledContainer>
          <StyledTaskContainer>
            <StyledTitle>{t("Tasks")}</StyledTitle>
            <StyledButton onClick={toggleOptions}>
              <StyledIcon className="fa fa-ellipsis-h" />
            </StyledButton>
            <ListOptions />
          </StyledTaskContainer>
          <StyledSortContainer>
            <StyledButton onClick={toggleSortList}>
              <StyledIcon className="fa fa-arrows-v" />
              {t("Sorting")}
            </StyledButton>
            <SortList sortVariant={sortVariant} />
          </StyledSortContainer>
        </StyledContainer>
      </ThemeProvider>
    </MainTitleContext.Provider>
  );
};
