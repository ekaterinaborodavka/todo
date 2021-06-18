import React, { useState, useCallback, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components/macro";
import { useTranslation } from "react-i18next";

import { Header, Main, SidebarLeft } from "~components";
import { theme } from "~src/theme/theme";
import { ParametersItem, PathNameMain, ThemeNames, Todo } from "~src/types";
import { Context } from "~src/context/context";
import { addNewTodo, search, update } from "~src/utils/todoUtils";
import {
  parametersTotalList,
  parametersApplicationsList,
  parametersMyDayList,
  parametersSmartList,
} from "~src/utils/utils";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 93%;
`;

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

  const addTodo = useCallback(
    (value: string, todoType: string) => {
      setTodos(addNewTodo(value, todos, todoType));
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
        totalParams,
        setTotalParams,
        myDayParams,
        setMyDayParams,
        smartListParams,
        setSmartListParams,
        applicationsParams,
        setApplicationsParams,
      }}
    >
      <ThemeProvider theme={theme[themeVariant]}>
        <Header />
        <Router>
          <Switch>
            <StyledContainer>
              <SidebarLeft />
              <Route exact path={PathNameMain.all}>
                <Main title={t("Tasks")} placeholder={t("AddTodo")} />
              </Route>
              <Route exact path={PathNameMain.myDay}>
                <Main title={t("MyDay")} placeholder={t("AddTodo")} />
              </Route>
              <Route exact path={PathNameMain.important}>
                <Main title={t("Important")} placeholder={t("AddTodo")} />
              </Route>
              <Route exact path={PathNameMain.planned}>
                <Main title={t("Planned")} placeholder={t("AddPlannedTodo")} />
              </Route>
              <Route exact path={PathNameMain.assigned}>
                <Main title={t("Assigned")} />
              </Route>
            </StyledContainer>
          </Switch>
        </Router>
      </ThemeProvider>
    </Context.Provider>
  );
};
