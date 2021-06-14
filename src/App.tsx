import React, { useState, useCallback } from "react";
import styled, { ThemeProvider } from "styled-components/macro";

import { Header, Main, SidebarLeft } from "~components";
import { theme } from "~src/theme/theme";
import { ThemeNames, Todo } from "~src/types";
import { Context } from "~src/context/context";
import { addNewTodo, update } from "~src/utils/todoUtils";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 93%;
`;

export const App: React.FC = () => {
  const [themeVariant, setThemeVariant] = useState(ThemeNames.blue);
  const [todos, setTodos] = useState<Todo[]>([] as Todo[]);
  const [searchValue, setSearchValue] = useState("");
  const [filterTodos, setFilterTodos] = useState<Todo[]>([] as Todo[]);

  const addTodo = useCallback(
    (value: string) => {
      setTodos(addNewTodo(value, todos));
    },
    [todos, setTodos]
  );

  const updateTodo = useCallback(
    (item: Todo, id: number) => {
      setTodos(update(todos, item, id));
    },
    [todos, setTodos]
  );

  return (
    <Context.Provider
      value={{
        themeVariant,
        setThemeVariant,
        todos,
        setTodos,
        filterTodos,
        setFilterTodos,
        searchValue,
        setSearchValue,
        addTodo,
        updateTodo,
      }}
    >
      <ThemeProvider theme={theme[themeVariant]}>
        <Header />
        <StyledContainer>
          <SidebarLeft />
          <Main />
        </StyledContainer>
      </ThemeProvider>
    </Context.Provider>
  );
};
