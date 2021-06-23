import React, { useCallback, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { OptionsContent, Popup, SortButton, ListOptions } from "~components";
import { sortVariant, SortOptions } from "~src/utils/utils";
import { PathNameMain } from "~src/types";
import { sortItemsList } from "~src/utils/todoUtils";
import { Context } from "~src/context/context";
import { useStateFlags } from "~src/hooks/useStateFlags";

import {
  StyledSortContainer,
  StyledSortOptions,
  SortOptionButton,
  SortOptionIcon,
  SortOptionClearIcon,
} from "./SortTodoList.styled";

export const SortTodoList: React.FC = () => {
  const { t } = useTranslation();
  const { todos, setTodos } = useContext(Context);
  const [sortedPoint, setSortedPoint] = useState("");
  const { flag: isSorted, setFlagTrue: setSorted, setFlagFalse: setUnsorted } = useStateFlags(false);
  const { flag: isReversedList, toggleFlag: toggleReverseList } = useStateFlags(false);
  const history = useHistory();
  const path = history.location.pathname;

  const isShowSortButton = useCallback(() => {
    if (PathNameMain.home === path || PathNameMain.myDay === path) {
      return true;
    }

    return false;
  }, [path]);

  const onSortItems = useCallback(
    ({ currentTarget }: React.MouseEvent) => {
      const value = currentTarget.getAttribute("data-value");
      const currentValue = value ? value : SortOptions.default;

      if (!todos.length) {
        setUnsorted();
        return;
      }

      const newTodos = sortItemsList(todos, currentValue);
      setTodos(newTodos);
      setSortedPoint(currentValue);
      setSorted();

      if (currentValue === SortOptions.default) {
        setUnsorted();
      }
    },
    [todos, setTodos, setSorted, setUnsorted]
  );

  const onCancelSorting = useCallback(() => {
    setUnsorted();
    const newTodos = sortItemsList(todos, SortOptions.default);
    setTodos(newTodos);
    setSortedPoint(SortOptions.default);
  }, [setTodos, setUnsorted, todos]);

  const onReverseSorting = useCallback(() => {
    toggleReverseList();
    const currentTodos = todos.slice().reverse();
    setTodos(currentTodos);
  }, [setTodos, todos, toggleReverseList]);

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
          <SortOptionButton onClick={onCancelSorting}>
            <SortOptionClearIcon className="fa fa-times" aria-hidden="true" />
          </SortOptionButton>
        </StyledSortOptions>
      ) : null}
    </>
  );
};
