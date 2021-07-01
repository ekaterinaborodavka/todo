import React, { useContext, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { Context } from "~src/context/context";
import { ListOptions, Popup } from "~src/components";
import { SortOptions } from "~src/utils/utils";
import { OptionsContent } from "~src/components";

import {
  changeTodosList,
  findInd,
  getActionsList,
  toggleCompletedTodo,
  toggleImportantTodo,
  toggleIsPopupOpenedTodo,
} from "~src/utils/todoUtils";

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
  isPopupOpened?: boolean;
}

export const TodoListItem: React.FC<Todo> = ({ title, completed, important, id, isPopupOpened, myDay }) => {
  const { t } = useTranslation();

  const { todos, updateTodo, deleteTodo, setCurrentTodo } = useContext(Context);

  const onToggleCompletedTodo = useCallback(() => {
    const newItem = toggleCompletedTodo(id, todos);
    updateTodo(newItem, id);
  }, [id, todos, updateTodo]);

  const onToggleImportantTodo = useCallback(() => {
    const newItem = toggleImportantTodo(id, todos);
    updateTodo(newItem, id);
  }, [id, todos, updateTodo]);

  const onToggleIsPopupOpenedTodo = useCallback(() => {
    const newItem = toggleIsPopupOpenedTodo(id, todos);
    updateTodo(newItem, id);
  }, [id, todos, updateTodo]);

  const onRightButtonMousePress = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      onToggleIsPopupOpenedTodo();
    },
    [onToggleIsPopupOpenedTodo]
  );

  const onChangeTodos = useCallback(
    ({ currentTarget }: React.MouseEvent) => {
      const value = currentTarget.getAttribute("data-value");
      const currentValue = value ? value : SortOptions.default;
      const newTodos = changeTodosList(todos, currentValue, id);
      if (!Array.isArray(newTodos)) {
        newTodos.isPopupOpened = !newTodos.isPopupOpened;
        updateTodo(newTodos, id);
        return;
      }
      deleteTodo(id);
    },
    [todos, id, updateTodo, deleteTodo]
  );
  const actionOptions = getActionsList(important, completed, myDay);

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

      {isPopupOpened ? (
        <Popup isOpen={isPopupOpened}>
          <OptionsContent title={t("ActionsType")} right="70%">
            <ListOptions options={actionOptions} onClick={onChangeTodos} />
          </OptionsContent>
        </Popup>
      ) : null}
    </>
  );
};
