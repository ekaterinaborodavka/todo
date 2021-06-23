import React, { useCallback, useContext } from "react";
import { useTranslation } from "react-i18next";

import { Context } from "~src/context/context";
import { search } from "~src/utils/todoUtils";

import { StyledIconClose, StyledIconSearch, StyledSerch, StyledSerchContainer } from "./Search.styled";

export const Search: React.FC = () => {
  const { t } = useTranslation();
  const { todos, setFilterTodos, searchValue, setSearchValue } = useContext(Context);

  const onInputChange = useCallback(
    ({ target }) => {
      setSearchValue(target.value);
      setFilterTodos(search(todos, target.value));
    },
    [setSearchValue, setFilterTodos, todos]
  );

  const onClearInput = useCallback(() => {
    setSearchValue("");
    setFilterTodos([]);
  }, [setSearchValue, setFilterTodos]);

  return (
    <StyledSerchContainer>
      <StyledIconSearch className="fa fa-search fa-flip-horizontal"></StyledIconSearch>
      <StyledSerch type="text" placeholder={t("Search")} onChange={onInputChange} value={searchValue} />
      <StyledIconClose className="fa fa-times" onClick={onClearInput}></StyledIconClose>
    </StyledSerchContainer>
  );
};
