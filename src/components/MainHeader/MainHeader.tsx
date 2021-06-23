import React from "react";
import { useTranslation } from "react-i18next";

import { OptionsContent, Popup, OptionButton, DropDownList, ListOptions, ThemeList, SortTodoList } from "~components";
import { Icons, parametersList, themeButtons } from "~src/utils/utils";

import { StyledContainer, StyledTaskContainer, StyledTitle } from "./MainHeader.styled";

interface MainHeaderProps {
  title: string;
  path: string;
}

export const MainHeader: React.FC<MainHeaderProps> = ({ title }) => {
  const { t } = useTranslation();

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
      <SortTodoList />
    </StyledContainer>
  );
};
