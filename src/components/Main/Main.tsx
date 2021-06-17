import React, { useContext } from "react";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { MainHeader, AddInput, TodoList } from "~components";
import { Context } from "~src/context/context";
import { COLORS } from "~src/colors";
import { TypeTodo } from "~src/utils/utils";

const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
  height: 100%;
  overflow: auto;
`;

const StyledBGContainer = styled.div`
  padding: 0 2rem;
  height: 100%;
  background: linear-gradient(
    180deg,
    ${COLORS.white},
    ${COLORS.white} 52px,
    ${COLORS.lightGrey} 52px,
    ${COLORS.lightGrey} 52px
  );
  background-size: 100% 53px;
  box-shadow: inset 0 1px 0 0 ${COLORS.lightGrey};
`;

const StyledSearchTitle = styled.h3`
  color: ${(props) => props.theme.color};
`;

interface MainProps {
  title: string;
  placeholder?: string;
}

export const Main: React.FC<MainProps> = ({ title, placeholder }) => {
  const { todos: allTodos, filterTodos, searchValue } = useContext(Context);
  const { t } = useTranslation();
  const location = useLocation();

  const todos = searchValue.trim() ? filterTodos : allTodos;

  const path = location.pathname;
  const typeOfPages = path.length > 1 ? path.slice(1) : TypeTodo.all;

  return (
    <StyledContainer>
      {searchValue.trim() && !filterTodos.length ? (
        <StyledSearchTitle>{t("SearchByValue", { value: searchValue })}</StyledSearchTitle>
      ) : (
        <>
          <MainHeader title={title} path={location.pathname} />
          {placeholder ? <AddInput placeholder={placeholder} typeOfPages={typeOfPages} /> : null}
          <TodoList todos={todos} todoType={typeOfPages} />
        </>
      )}
      <StyledBGContainer></StyledBGContainer>
    </StyledContainer>
  );
};
