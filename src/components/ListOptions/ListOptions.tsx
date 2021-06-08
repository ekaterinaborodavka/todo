import React, { useContext } from "react";
import styled, { keyframes } from "styled-components/macro";
import { useTranslation } from "react-i18next";

import { COLORS } from "~src/colors";
import { ThemeList } from "~components/ThemeList/ThemeList";
import { themeButtons } from "~src/utils/utils";
import { MainTitleContext } from "~src/context/mainTitleContext";
import { ClickOutsideListener } from "~components";
import { useStateFlags } from "~src/hooks/useStateFlags";

const slideDown = keyframes`
0% {
  transform: translateY(-10%);
  opacity: 0;
}      
100% {
  transform: translateY(0%);
} 
`;

const StyledContainer = styled.div<{ isShowOptions: boolean }>`
  width: 200px;
  border-radius: 2px;
  box-shadow: 0px 4px 8px 2px rgba(45, 47, 51, 0.2);
  font-family: Segoe UI;
  position: absolute;
  background-color: ${COLORS.white};
  top: 80%;
  left: 4%;
  z-index: 10;
  display: ${(props) => (props.isShowOptions ? "block" : "none")};
  animation: ${slideDown} 0.5s linear;
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
  width: 140%;
  left: 100%;
  top: 0;
  z-index: 10;
  padding: 0.6rem;
  display: ${(props) => (props.isShowThemeMenu ? "block" : "none")};
  animation: ${slideDown} 0.7s linear;
`;

export const ListOptions: React.FC = () => {
  const { t } = useTranslation();
  const { isShowOptions, setIsShowOptions } = useContext(MainTitleContext);
  const { flag: isShowThemeMenu, setFlagFalse, setFlagTrue } = useStateFlags(false);

  return (
    <ClickOutsideListener isShow={isShowOptions} setIsShow={setIsShowOptions}>
      <StyledContainer isShowOptions={isShowOptions}>
        <StyledTitle>{t("ListOptions")}</StyledTitle>
        <StyledList>
          <StyledListItem>
            <StyledButton type="button" onMouseOver={setFlagTrue} onMouseOut={setFlagFalse}>
              <i className="fa fa-paint-brush" />
              <StyledListText>{t("ChangeTheme")}</StyledListText>
              <i className="fa fa-angle-right" />
            </StyledButton>
            <StyledThemeList isShowThemeMenu={isShowThemeMenu} onMouseOver={setFlagTrue} onMouseOut={setFlagFalse}>
              <ThemeList themes={themeButtons} />
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
    </ClickOutsideListener>
  );
};
