import React, { useCallback, useState } from "react";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";

import { COLORS } from "~src/colors";
import { ThemeList } from "~components/ThemeList/ThemeList";
import { themeButtons } from "~src/utils/utils";

const StyledContainer = styled.div`
  width: 15%;
  border-radius: 2px;
  box-shadow: 0px 4px 8px 2px rgba(45, 47, 51, 0.2);
  font-family: Segoe UI;
`;

const StyledTitle = styled.h4`
  text-align: center;
  border-bottom: 1px solid ${COLORS.lightGrey};
  padding: 1rem;
  margin: 0;
  color: ${COLORS.optionText};
  font-weight: 600;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledListItem = styled.li`
  margin: 0.1rem;
  position: relative;
`;

const StyledButton = styled.button`
  width: 100%;
  border: 1px solid transparent;
  background-color: ${COLORS.white};
  color: ${COLORS.optionText};
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  &:hover {
    background-color: ${COLORS.lightGrey};
  }
`;

const StyledListText = styled.span`
  width: 90%;
`;

const StyledThemeList = styled.ul<{ isShowThemeMenu: boolean }>`
  border-radius: 2px;
  box-shadow: 0px 4px 8px 2px rgba(45, 47, 51, 0.2);
  position: absolute;
  background-color: ${COLORS.white};
  width: 170%;
  left: 100%;
  top: 0;
  z-index: 1;
  padding: 0.6rem;
  display: ${(props) => (props.isShowThemeMenu ? null : "none")};
`;

export const ListOptions: React.FC = () => {
  const { t } = useTranslation();
  const [isShowThemeMenu, setIsShowThemeMenu] = useState(false);

  const showThemeMenu = useCallback(() => {
    setIsShowThemeMenu(true);
  }, [setIsShowThemeMenu]);

  const hideThemeMenu = useCallback(() => {
    setIsShowThemeMenu(false);
  }, [setIsShowThemeMenu]);

  return (
    <StyledContainer>
      <StyledTitle>{t("ListOptions")}</StyledTitle>
      <StyledList>
        <StyledListItem>
          <StyledButton type="button" onMouseOver={showThemeMenu} onMouseOut={hideThemeMenu}>
            <i className="fa fa-paint-brush" />
            <StyledListText>{t("ChangeTheme")}</StyledListText>
            <i className="fa fa-angle-right" />
          </StyledButton>
          <StyledThemeList isShowThemeMenu={isShowThemeMenu} onMouseOver={showThemeMenu} onMouseOut={hideThemeMenu}>
            <ThemeList thems={themeButtons} />
          </StyledThemeList>
        </StyledListItem>
        <StyledListItem>
          <StyledButton type="button">
            <i className="fa fa-print" />
            <StyledListText>{t("Printing")}</StyledListText>
          </StyledButton>
        </StyledListItem>
      </StyledList>
    </StyledContainer>
  );
};
