import React, { useState, useCallback, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, match } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";
import { useTranslation } from "react-i18next";

import { Header, Main, SidebarLeft, TodoDetails, Todo } from "~components";
import { theme } from "~src/theme/theme";
import { ParametersItem, PathNameMain, SidebarLeftContentItemProps, ThemeNames } from "~src/types";
import { Context } from "~src/context/context";
import { addNewTodo, deleteCurrentTodo, search, update } from "~src/utils/todoUtils";
import {
  parametersTotalList,
  parametersApplicationsList,
  parametersMyDayList,
  parametersSmartList,
  TypeTodo,
} from "~src/utils/utils";

import { StyledContainer } from "./App.styled";

export const App: React.FC = () => {
  const { t } = useTranslation();
  const [themeVariant, setThemeVariant] = useState(ThemeNames.blue);
  const [todos, setTodos] = useState<Todo[]>([] as Todo[]);
  const [searchValue, setSearchValue] = useState("");
  const [filterTodos, setFilterTodos] = useState<Todo[]>([] as Todo[]);
  const [totalParams, setTotalParams] = useState<ParametersItem[]>(parametersTotalList);
  const [myDayParams, setMyDayParams] = useState<ParametersItem[]>(parametersMyDayList);
  const [smartListParams, setSmartListParams] = useState<ParametersItem[]>(parametersSmartList);
  const [applicationsParams, setApplicationsParams] = useState<ParametersItem[]>(parametersApplicationsList);
  const [userList, setUserList] = useState<SidebarLeftContentItemProps[]>([]);
  const [currentTodo, setCurrentTodo] = useState<Todo>({} as Todo);

  const addTodo = useCallback(
    (value: string, todoType: string) => {
      setTodos(addNewTodo(value, todos, todoType));
    },
    [todos]
  );
  const deleteTodo = useCallback(
    (id: number) => {
      setTodos(deleteCurrentTodo(id, todos));
    },
    [todos]
  );

  useEffect(() => {
    if (searchValue.trim().length) {
      setFilterTodos(search(todos, searchValue));
    }

    if (!searchValue.trim().length && filterTodos.length) {
      setFilterTodos([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, todos]);

  const updateTodo = useCallback(
    (item: Todo, id: number) => {
      setTodos(update(todos, item, id));

      if (searchValue.trim().length) {
        setFilterTodos(update(filterTodos, item, id));
      }
    },
    [todos, searchValue, filterTodos]
  );

  const setTextInputPlaceholder = (path: string): string => {
    if (path === TypeTodo.planned) {
      return "AddPlannedTodo";
    }

    if (path === TypeTodo.completedTodo) {
      return "";
    }

    return "AddTodo";
  };

  const setMainTitleText = (match: match<{ name: string }>): string => {
    const path = match.params.name;
    return path.charAt(0).toUpperCase() + path.substring(1);
  };

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
        deleteTodo,
        updateTodo,
        totalParams,
        setTotalParams,
        myDayParams,
        setMyDayParams,
        smartListParams,
        setSmartListParams,
        applicationsParams,
        setApplicationsParams,
        userList,
        setUserList,
        currentTodo,
        setCurrentTodo,
      }}
    >
      <ThemeProvider theme={theme[themeVariant]}>
        <Header />
        <Router>
          <Switch>
            <StyledContainer>
              <SidebarLeft />
              <Route
                exact
                path={PathNameMain.home}
                render={({ match }) => <Main path={match.url} title={t("Tasks")} placeholder={t("AddTodo")} />}
              />
              <Route
                exact
                path="/:name"
                render={({ match }) => (
                  <Main
                    path={match.url}
                    title={t(`${setMainTitleText(match)}`)}
                    placeholder={t(`${setTextInputPlaceholder(match.params.name)}`)}
                  />
                )}
              />
              <TodoDetails />
            </StyledContainer>
          </Switch>
        </Router>
      </ThemeProvider>
    </Context.Provider>
  );
};
