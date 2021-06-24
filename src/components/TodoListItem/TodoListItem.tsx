import React, { useContext, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { Context } from "~src/context/context";
import { ListOptions, Popup } from "~src/components";
import { actionOptions, SortOptions } from "~src/utils/utils";
import { OptionsContent } from "~src/components";
import { useStateFlags } from "~src/hooks/useStateFlags";

import { changeTodosList, toggleCompletedTodo, toggleImportantTodo, findInd } from "~src/utils/todoUtils";

import { StyledContainer, StyledIcon, StyledButton } from "./TodoListItem.styled";

export interface Todo {
  [key: string]: number | string | boolean | undefined;
  id: number;
  date: number;
  title: string;
  completed: boolean;
  timeCompleted: number;
  myDay: boolean;
  important: boolean;
  planned: boolean;
  assigned: boolean;
  home?: boolean;
  allTodo?: boolean;
}

export const TodoListItem: React.FC<Todo> = ({ title, completed, important, id }) => {
  const { t } = useTranslation();
  const { todos, updateTodo, setTodos, setCurrentTodo } = useContext(Context);
  const { flag: isOpen, toggleFlag: toggleFlag } = useStateFlags(false);

  const onToggleCompletedTodo = useCallback(() => {
    const newItem = toggleCompletedTodo(id, todos);
    updateTodo(newItem, id);
  }, [id, todos, updateTodo]);

  const onToggleImportantTodo = useCallback(() => {
    const newItem = toggleImportantTodo(id, todos);
    updateTodo(newItem, id);
  }, [id, todos, updateTodo]);

  const onRightButtonMousePress = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      toggleFlag();
    },
    [toggleFlag]
  );

  const onChangeTodos = useCallback(
    ({ currentTarget }: React.MouseEvent) => {
      const value = currentTarget.getAttribute("data-value");
      const currentValue = value ? value : SortOptions.default;
      const newTodos = changeTodosList(todos, currentValue, id);
      setTodos(newTodos);
    },
    [todos, id, setTodos]
  );

  const onCurrentTodo = useCallback(() => {
    const ind = findInd(id, todos);
    const currentTodo = todos[ind];
    setCurrentTodo(currentTodo);
  }, [setCurrentTodo, id, todos]);

  return (
    <>
      <StyledContainer onContextMenu={onRightButtonMousePress}>
        <StyledIcon
          onClick={onToggleCompletedTodo}
          className={completed ? "fa fa-check-circle" : "fa fa-circle-thin"}
        />
        <StyledButton onClick={onCurrentTodo}>{title}</StyledButton>
        <StyledIcon onClick={onToggleImportantTodo} className={important ? "fa fa-star" : "fa fa-star-o"} />
      </StyledContainer>

      {isOpen ? (
        <Popup isOpen={isOpen}>
          <OptionsContent title={t("ActionsType")} right="70%">
            <ListOptions options={actionOptions} onClick={onChangeTodos} />
          </OptionsContent>
        </Popup>
      ) : null}
    </>
  );
};
