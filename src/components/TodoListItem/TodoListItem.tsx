import React, { useContext, useCallback } from "react";

import { Todo } from "~src/types";
import { Context } from "~src/context/context";
import { toggleCompletedTodo, toggleImportantTodo, findInd } from "~src/utils/todoUtils";

import { StyledContainer, StyledIcon, StyledButton } from "./TodoListItem.styled";

export const TodoListItem: React.FC<Todo> = ({ title, completed, important, id }) => {
  const { todos, updateTodo, setCurrentTodo } = useContext(Context);

  const onToggleCompletedTodo = useCallback(() => {
    const newItem = toggleCompletedTodo(id, todos);
    updateTodo(newItem, id);
  }, [id, todos, updateTodo]);

  const onToggleImportantTodo = useCallback(() => {
    const newItem = toggleImportantTodo(id, todos);
    updateTodo(newItem, id);
  }, [id, todos, updateTodo]);

  const onCurrentTodo = useCallback(() => {
    const ind = findInd(id, todos);
    const currentTodo = todos[ind];
    setCurrentTodo(currentTodo);
  }, [setCurrentTodo, id, todos]);

  return (
    <StyledContainer>
      <StyledIcon onClick={onToggleCompletedTodo} className={completed ? "fa fa-check-circle" : "fa fa-circle-thin"} />
      <StyledButton onClick={onCurrentTodo}>{title}</StyledButton>
      <StyledIcon onClick={onToggleImportantTodo} className={important ? "fa fa-star" : "fa fa-star-o"} />
    </StyledContainer>
  );
};
