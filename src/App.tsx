import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components/macro";

import { Header, Main, SidebarLeft } from "~components";
import { theme } from "~src/theme/theme";
import { ThemeNames, Todo } from "~src/types";
import { Context } from "~src/context/context";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 93%;
`;

export const App: React.FC = () => {
  const [themeVariant, setThemeVariant] = useState(ThemeNames.blue);
  const [todos, setTodos] = useState<Todo[] | []>([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterTodos, setFilterTodos] = useState<Todo[] | []>([]);

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
