import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { MainHeader, AddInput, TodoList } from "~components";
import { Context } from "~src/context/context";
import { TypeTodo } from "~src/utils/utils";

import { StyledBGContainer, StyledContainer, StyledSearchTitle } from "./Main.styled";

interface MainProps {
  title: string;
  placeholder?: string | undefined;
  path: string;
}

export const Main: React.FC<MainProps> = ({ title, placeholder, path }) => {
  const { todos: allTodos, filterTodos, searchValue } = useContext(Context);
  const { t } = useTranslation();

  const todos = searchValue.trim() ? filterTodos : allTodos;

  const typeOfPages = path.length > 1 ? path.slice(1) : TypeTodo.home;

  const isShowAddInput = placeholder || typeOfPages !== TypeTodo.completedTodo;

  return (
    <StyledContainer>
      {searchValue.trim() && !filterTodos.length ? (
        <StyledSearchTitle>{t("SearchByValue", { value: searchValue })}</StyledSearchTitle>
      ) : (
        <>
          <MainHeader title={title} path={location.pathname} />
          {isShowAddInput ? <AddInput placeholder={placeholder} typeOfPages={typeOfPages} /> : null}
          <TodoList todos={todos} todoType={typeOfPages} />
        </>
      )}
      <StyledBGContainer></StyledBGContainer>
    </StyledContainer>
  );
};
