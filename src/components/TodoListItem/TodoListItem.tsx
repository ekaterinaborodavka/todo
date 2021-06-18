import React, { useContext, useCallback } from "react";
import styled from "styled-components/macro";

import { Todo } from "~src/types";
import { COLORS } from "~src/colors";
import { Context } from "~src/context/context";
import { toggleCompletedTodo, toggleImportantTodo } from "~src/utils/todoUtils";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  padding: 1rem 0;
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
  padding: 0 1rem;
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
  const { todos, updateTodo } = useContext(Context);

  const onToggleCompletedTodo = useCallback(() => {
    const newItem = toggleCompletedTodo(id, todos);
    updateTodo(newItem, id);
  }, [id, todos, updateTodo]);

  const onToggleImportantTodo = useCallback(() => {
    const newItem = toggleImportantTodo(id, todos);
    updateTodo(newItem, id);
  }, [id, todos, updateTodo]);

  return (
    <StyledContainer>
      <StyledIcon onClick={onToggleCompletedTodo} className={completed ? "fa fa-check-circle" : "fa fa-circle-thin"} />
      <StyledButton>{title}</StyledButton>
      <StyledIcon onClick={onToggleImportantTodo} className={important ? "fa fa-star" : "fa fa-star-o"} />
    </StyledContainer>
  );
};
