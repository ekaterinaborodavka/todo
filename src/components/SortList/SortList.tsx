import React, { useCallback, useContext } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { OptionsContent, Popup, SortButton, ListOptions } from "~components";
import { sortVariant, SortOptions } from "~src/utils/utils";
import { PathNameMain } from "~src/types";
import { sortItemsList } from "~src/utils/todoUtils";
import { Context } from "~src/context/context";
import { useState } from "react";
import { COLORS } from "~src/colors";
import { useStateFlags } from "../../hooks/useStateFlags";

const StyledSortContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color};
`;

const StyledSortOptions = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-left: 5px;
  color: ${(props) => props.theme.color};
`;

const SortOptionButton = styled.button`
  border: none;
  background-color: ${COLORS.white};
  font-size: 15px;
  &:hover,
  :focus {
    background-color: #cbddec;
  }
  &:active {
    background-color: #bdd6fd;
  }
`;

const SortOptionIcon = styled.i`
  font-size: 25px;
  font-weight: 500;
  color: ${COLORS.grey};
  padding: 5px;
  -webkit-text-stroke: 1px white;
`;
const SortOptionClearIcon = styled.i`
  font-size: 25px;
  font-weight: 500;
  color: ${COLORS.grey};
  padding: 5px;
  -webkit-text-stroke: 4px white;
`;

export const SortList: React.FC = () => {
  const { t } = useTranslation();
  const { todos, setTodos } = useContext(Context);
  const [sortedPoint, setSortedPoint] = useState("");
  const { flag: isSorted, toggleFlag: toggleSorting, setFlagFalse: setUnsorted } = useStateFlags(false);
  const { flag: isReversedList, toggleFlag: toggleReverseList } = useStateFlags(false);
  const history = useHistory();
  const path = history.location.pathname;

  const isShowSortButton = useCallback(() => {
    if (path === PathNameMain.all || path === PathNameMain.myDay) {
      return true;
    }
    return false;
  }, [path]);

  const onSortItems = ({ currentTarget }: React.MouseEvent) => {
    const value = currentTarget.getAttribute("data-value");
    const currentValue = value ? value : SortOptions.default;
    if (!todos.length) {
      setUnsorted();
      return;
    }
    const newTodos = sortItemsList(todos, currentValue);
    setTodos(newTodos);
    setSortedPoint(currentValue);
    if (currentValue === SortOptions.default) {
      setUnsorted();
    } else {
      toggleSorting();
    }
  };
  const onCloseSorting = () => {
    setUnsorted();
    const newTodos = sortItemsList(todos, SortOptions.default);
    setTodos(newTodos);
    setSortedPoint(SortOptions.default);
  };
  const onReverseSorting = () => {
    toggleReverseList();
    const currentTodos = todos.slice().reverse();
    setTodos(currentTodos);
  };

  return (
    <>
      {isShowSortButton() ? (
        <StyledSortContainer>
          <Popup button={SortButton}>
            <OptionsContent title={t("Printing")} width={"250px"}>
              <ListOptions options={sortVariant} onClick={onSortItems} />
            </OptionsContent>
          </Popup>
        </StyledSortContainer>
      ) : null}
      {isSorted ? (
        <StyledSortOptions>
          <SortOptionButton onClick={onReverseSorting}>
            {isReversedList ? (
              <SortOptionIcon className="fa fa-angle-down" aria-hidden="true" />
            ) : (
              <SortOptionIcon className="fa fa-angle-up" aria-hidden="true" />
            )}
          </SortOptionButton>
          {t("Sorting")}: {sortedPoint.toLowerCase()}
          <SortOptionButton onClick={onCloseSorting}>
            <SortOptionClearIcon className="fa fa-times" aria-hidden="true" />
          </SortOptionButton>
        </StyledSortOptions>
      ) : null}
    </>
  );
};
