import React, { useCallback, useContext } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";

import { COLORS } from "~src/colors";
import { Context } from "~src/context/context";
import { search } from "~src/utils/todoUtils";

const StyledSerchContainer = styled.div`
  width: 25%;
  margin: 0.5rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.search};
  border-radius: 2px;
  &:hover {
    background-color: ${COLORS.white};
  }
`;

const StyledSerch = styled.input`
  width: 80%;
  margin: 0.5rem auto;
  padding-left: 1rem;
  border: none;
  background-color: transparent;
  outline: none;
  &::placeholder {
    color: transparent;
  }
  &:focus::placeholder {
    color: ${COLORS.grey};
    font-weight: bold;
  }
  &:focus + i {
    opacity: 1;
  }
`;

const StyledIconSearch = styled.i`
  margin-left: 1.5rem;
  color: ${COLORS.blue};
  -webkit-text-stroke: 1px ${COLORS.search};
`;
const StyledIconClose = styled.i`
  margin-right: 1.5rem;
  color: ${COLORS.blue};
  opacity: 0;
  -webkit-text-stroke: 1.5px ${COLORS.search};
`;

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
