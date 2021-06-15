import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";

import { OptionsContent, Popup, OptionButton, SortButton, DropDownList, ListOptions, ThemeList } from "~components";
import { Icons, parametersList, themeButtons, sortVariant } from "~src/utils/utils";
import { PathNameMain } from "~src/types";

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

interface MainHeaderProps {
  title: string;
  path: string;
}

export const MainHeader: React.FC<MainHeaderProps> = ({ title, path }) => {
  const { t } = useTranslation();

  const isShowSortButton = useCallback(() => {
    if (path === PathNameMain.all || path === PathNameMain.myDay) {
      return true;
    }
    return false;
  }, [path]);

  return (
    <StyledContainer>
      <StyledTaskContainer>
        <StyledTitle>{title}</StyledTitle>
        <Popup button={OptionButton}>
          <OptionsContent title={t("ListOptions")}>
            <DropDownList icon={Icons.paintBrush} title={t("ChangeTheme")}>
              <ThemeList themes={themeButtons} />
            </DropDownList>
            <ListOptions options={parametersList} />
          </OptionsContent>
        </Popup>
      </StyledTaskContainer>
      {isShowSortButton() ? (
        <StyledSortContainer>
          <Popup button={SortButton}>
            <OptionsContent title={t("Printing")} width={"250px"}>
              <ListOptions options={sortVariant} />
            </OptionsContent>
          </Popup>
        </StyledSortContainer>
      ) : null}
    </StyledContainer>
  );
};
