import React, { useState, useContext } from "react";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";

import { SidebarLeftContentList, SidebarLeftFooterList } from "~components";
import { Icons, sidebarContent, sidebarFooter } from "~src/utils/utils";
import { COLORS } from "~src/colors";
import { SidebarLeftContext } from "~src/context/sidebarLeftContext";
import { useStateFlags } from "~src/hooks/useStateFlags";
import { addNewListItem } from "~src/utils/todoUtils";
import { SidebarLeftContentItemProps } from "~src/types";
import { Context } from "~src/context/context";

const StyledSidebar = styled.div<{ isOpened: boolean }>`
  width: ${(props) => (props.isOpened ? "25%" : "60px")};
  transition: all 0.2s linear;
  background-color: ${COLORS.bgSidebarLeft};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: auto;
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
  cursor: pointer;
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
  width: 100%;
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

const StyledForm = styled.form`
  width: 100%;
  display: flex;
`;

export const SidebarLeft: React.FC = () => {
  const { t } = useTranslation();
  const { flag: isSidebarOpened, toggleFlag: toggleSidebar } = useStateFlags(false);
  const { userList, setUserList } = useContext(Context);
  const {
    flag: showCreateInput,
    setFlagFalse: onHideCreateInput,
    setFlagTrue: onShowCreateInput,
  } = useStateFlags(false);
  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmitInput = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();

    if (inputValue.trim()) {
      setUserList(addNewListItem(isTextValid(userList, inputValue), userList));
    }

    setInputValue("");
  };

  const isTextValid = (list: SidebarLeftContentItemProps[], searchText: string): string => {
    const validText = list.filter(
      (el) =>
        el.title
          .toLowerCase()
          .trim()
          .replace(/\s+\([^\d]*(\d+)\)$/gi, "") === searchText.toLowerCase().trim()
    ).length;

    if (validText === 0) {
      return searchText;
    }

    return `${searchText} (${validText})`;
  };

  return (
    <SidebarLeftContext.Provider value={{ isSidebarOpened }}>
      <StyledSidebar isOpened={isSidebarOpened}>
        <StyledContent>
          <StyledButton onClick={toggleSidebar}>
            <StyledIconArrow className={`${isSidebarOpened ? Icons.angleLeft : Icons.angleRight}`} />
          </StyledButton>
          <SidebarLeftContentList contentSidebar={sidebarContent} isDrag={false} />
          <StyledCreate>
            <StyledButton onClick={handleSubmitInput}>
              <StyledIconPlus className="fa fa-plus" />
            </StyledButton>
            {showCreateInput ? (
              <StyledForm onSubmit={handleSubmitInput}>
                <StyledCreateInput
                  onChange={handleChangeInput}
                  value={inputValue}
                  autoFocus
                  placeholder={t("CreateList")}
                  onBlur={onHideCreateInput}
                  type="text"
                />
              </StyledForm>
            ) : (
              <StyledCreateTitle onClick={onShowCreateInput}>{t("CreateList")}</StyledCreateTitle>
            )}
          </StyledCreate>
          {userList.length ? <SidebarLeftContentList contentSidebar={userList} isDrag /> : null}
        </StyledContent>
        <SidebarLeftFooterList contentFooter={sidebarFooter} />
      </StyledSidebar>
    </SidebarLeftContext.Provider>
  );
};
