import React from "react";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";

import { SidebarLeftContentList, SidebarLeftFooterList } from "~components";
import { sidebarContent, sidebarFooter } from "~src/utils/utils";
import { COLORS } from "~src/colors";
import { SidebarContext } from "~src/context/sidebarContext";
import { useStateFlags } from "~src/hooks/useStateFlags";

const StyledSidebar = styled.div<{ isOpened: boolean }>`
  width: ${(props) => (props.isOpened ? "25%" : "60px")};
  transition: all 0.2s linear;
  background-color: ${COLORS.bgSidebarLeft};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledIconArrow = styled.i`
  color: ${COLORS.blue};
  font-size: 1.5rem;
  padding: 0.5rem;
`;

const StyledIconPlus = styled.i`
  color: ${COLORS.blue};
  -webkit-text-stroke: 2.5px ${COLORS.bgSidebarLeft};
  font-size: 1.5rem;
  padding: 0.5rem;
`;

const StyledButton = styled.button`
  width: 50px;
  margin-left: 0.4rem;
  border: 1px solid transparent;
  background-color: ${COLORS.bgSidebarLeft};
  &:hover {
    background-color: ${COLORS.lightGrey};
  }
`;

const StyledCreateTitle = styled.span`
  color: ${COLORS.blue};
  padding: 0.5rem 1rem;
  white-space: nowrap;
`;

const StyledCreate = styled.div`
  display: flex;
`;

const StyledCreateInput = styled.input`
  width: 65%;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  background-color: ${COLORS.bgSidebarLeft};
  outline: none;
  font-size: 1rem;
  font-family: Segoe UI;
  &:hover {
    background-color: ${COLORS.lightGrey};
  }
`;

export const SidebarLeft: React.FC = () => {
  const { t } = useTranslation();
  const { flag: isSidebarOpened, toggleFlag: toggleSidebar } = useStateFlags(false);
  const {
    flag: showCreateInput,
    setFlagFalse: onHideCreateInput,
    setFlagTrue: onShowCreateInput,
  } = useStateFlags(false);

  return (
    <SidebarContext.Provider value={{ isSidebarOpened }}>
      <StyledSidebar isOpened={isSidebarOpened}>
        <StyledContent>
          <StyledButton onClick={toggleSidebar}>
            <StyledIconArrow className={`fa fa-angle-right ${isSidebarOpened ? "fa-flip-horizontal" : null}`} />
          </StyledButton>
          <SidebarLeftContentList contentSidebar={sidebarContent} />
          <StyledCreate>
            <StyledButton>
              <StyledIconPlus className="fa fa-plus" />
            </StyledButton>
            {showCreateInput ? (
              <StyledCreateInput autoFocus placeholder={t("CreateList")} onBlur={onHideCreateInput} type="text" />
            ) : (
              <StyledCreateTitle onClick={onShowCreateInput}>{t("CreateList")}</StyledCreateTitle>
            )}
          </StyledCreate>
        </StyledContent>
        <SidebarLeftFooterList contentFooter={sidebarFooter} />
      </StyledSidebar>
    </SidebarContext.Provider>
  );
};
