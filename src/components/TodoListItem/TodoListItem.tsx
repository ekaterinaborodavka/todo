import React, { useContext, useCallback } from "react";
import styled from "styled-components/macro";

import { Todo } from "~src/types";
import { COLORS } from "~src/colors";
import { Context } from "~src/context/context";
import { toggleCompletedTodo, toggleImportantTodo, findInd } from "~src/utils/todoUtils";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  border-bottom: 1px solid ${COLORS.lightGrey};
  box-shadow: inset 0 1px 0 0 ${COLORS.lightGrey};
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.lightGrey};
  }
`;

const StyledButton = styled.button`
  width: 100%;
  color: inherit;
  text-align: left;
  padding: 1.2rem 1rem;
  background-color: transparent;
  border: 1px solid transparent;
  color: ${(props) => props.theme.color};
  cursor: pointer;
`;

const StyledIcon = styled.i`
  margin: 0 0.5rem;
  color: ${(props) => props.theme.color};
`;

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
