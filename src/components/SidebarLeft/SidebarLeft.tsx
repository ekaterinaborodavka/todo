import React, { useState, useCallback } from "react";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";

import { SidebarLeftContentList, SidebarLeftFooterList } from "~components";
import { sidebarContent, sidebarFooter } from "~src/utils/utils";
import { COLORS } from "~src/colors";
import { SidebarContext } from "~src/context/sidebarContext";

const StyledSidebar = styled.div<{ isOpened: boolean }>`
  width: ${(props) => (props.isOpened ? "20%" : "70px")};
  transition: all 0.2s linear;
  background-color: ${COLORS.bgSidebarLeft};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
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

const StyledCreateTitle = styled.span<{ isOpened: boolean }>`
  color: ${COLORS.blue};
  padding: 0.5rem;
  display: ${(props) => (props.isOpened ? null : "none")};
  white-space: nowrap;
`;

const StyledCreate = styled.div`
  display: flex;
`;

const StyledCreateInput = styled.input`
  width: 65%;
  padding: 0.5rem;
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
  const [isSidebarOpened, setIsSIdebarOpened] = useState(false);
  const [showCreateInput, setShowCreateInput] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSIdebarOpened(!isSidebarOpened);
  }, [setIsSIdebarOpened, isSidebarOpened]);

  const onShowCreateInput = useCallback(() => {
    setShowCreateInput(true);
  }, [setShowCreateInput]);

  const onHideCreateInput = useCallback(() => {
    setShowCreateInput(false);
  }, [setShowCreateInput]);

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
              <StyledCreateTitle onClick={onShowCreateInput} isOpened={isSidebarOpened}>
                {t("CreateList")}
              </StyledCreateTitle>
            )}
          </StyledCreate>
        </StyledContent>
        <SidebarLeftFooterList contentFooter={sidebarFooter} />
      </StyledSidebar>
    </SidebarContext.Provider>
  );
};
