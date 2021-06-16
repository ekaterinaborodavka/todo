import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";
import { OptionsContent, Popup, OptionButton, DropDownList, ListOptions, ThemeList } from "~components";
import { Icons, parametersList, themeButtons } from "~src/utils/utils";
import { SortContainer } from "../SortContainer/SortContainer";

const StyledContainer = styled.div`
  font-family: "Segoe UI";
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 1rem;
  width: 100%;
`;

const StyledTaskContainer = styled.div`
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
      <SortContainer />
    </StyledContainer>
  );
};
