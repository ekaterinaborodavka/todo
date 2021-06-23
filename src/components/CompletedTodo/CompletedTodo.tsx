import React, { useContext, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { Context } from "~src/context/context";
import { useStateFlags } from "~src/hooks/useStateFlags";
import { CompletedTodoProps, Todo } from "~src/types";
import { TodoListItem } from "~components";
import { TypeTodo } from "~src/utils/utils";

import { StyledIcon, StyledIconButton, StyledTitle } from "./CompletedTodo.styled";

export const CompletedTodo: React.FC<CompletedTodoProps> = ({ todos, todoType }) => {
  const { searchValue } = useContext(Context);
  const { flag: isCompleteVisible, toggleFlag: toggleSidebar } = useStateFlags(true);
  const { t } = useTranslation();

  const filterConditionOfListTodos = useCallback(
    (todo: Todo) =>
      (todoType === TypeTodo.allTodo || todoType === TypeTodo.completedTodo || todo[todoType]) && todo.completed,
    [todoType]
  );

  const isTodosCompleted = useCallback(
    () => todos.some((todo: Todo) => filterConditionOfListTodos(todo)),
    [filterConditionOfListTodos, todos]
  );

  return (
    <>
      {searchValue.trim().length ? null : (
        <>
          {isTodosCompleted() ? (
            <>
              <StyledIconButton onClick={toggleSidebar}>
                <StyledIcon className={isCompleteVisible ? "fa fa-arrow-down" : "fa fa-arrow-right"} />
                <StyledTitle>{t("CompletedTodo")}</StyledTitle>
              </StyledIconButton>

              {isCompleteVisible
                ? todos.map((todo: Todo) =>
                    filterConditionOfListTodos(todo) ? <TodoListItem key={todo.id} {...todo} /> : null
                  )
                : null}
            </>
          ) : null}
        </>
      )}
    </>
  );
};
