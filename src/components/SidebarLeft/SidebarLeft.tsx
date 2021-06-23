import React, { useState, useContext, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { SidebarLeftContentList, SidebarLeftFooterList } from "~components";
import { Icons, sidebarContent, sidebarFooter } from "~src/utils/utils";
import { SidebarLeftContext } from "~src/context/sidebarLeftContext";
import { useStateFlags } from "~src/hooks/useStateFlags";
import { addNewListItem, isTextValid } from "~src/utils/todoUtils";
import { Context } from "~src/context/context";

import {
  StyledButton,
  StyledContent,
  StyledCreate,
  StyledCreateInput,
  StyledCreateTitle,
  StyledForm,
  StyledIconArrow,
  StyledIconPlus,
  StyledSidebar,
} from "./SidebarLeft.styled";

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

  const handleChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const handleSubmitInput = useCallback(
    (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
      e.preventDefault();

      if (inputValue.trim()) {
        setUserList(addNewListItem(isTextValid(userList, inputValue), userList));
      }

      setInputValue("");
    },
    [inputValue, setUserList, userList]
  );

  return (
    <SidebarLeftContext.Provider value={{ isSidebarOpened }}>
      <StyledSidebar isOpened={isSidebarOpened}>
        <StyledContent isOpened={isSidebarOpened}>
          <StyledButton onClick={toggleSidebar}>
            <StyledIconArrow className={`${isSidebarOpened ? Icons.angleLeft : Icons.angleRight}`} />
          </StyledButton>
          <SidebarLeftContentList contentSidebar={sidebarContent} />
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
