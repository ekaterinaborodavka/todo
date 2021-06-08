import React, { useContext, useCallback } from "react";
import styled from "styled-components/macro";

import { Todo } from "~src/types";
import { COLORS } from "~src/colors";
import { Context } from "~src/context/context";
import { completedTodo, incompletedTodo, toggleImpotantTodo } from "~src/utils/todoUtils";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${COLORS.lightGrey};
  box-shadow-bottom: inset 0 1px 0 0 ${COLORS.lightGrey};
  cursor: pointer;
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

export const TodoListItem: React.FC<Todo> = ({ title, completed, impotant, id }) => {
  const { todos, setTodos } = useContext(Context);

  const onCompletedTodo = useCallback(() => {
    setTodos(completedTodo(id, todos));
  }, [id, todos, setTodos]);

  const onIncompleteTodo = useCallback(() => {
    setTodos(incompletedTodo(id, todos));
  }, [id, todos, setTodos]);

  const onToggleImpotantTodo = useCallback(() => {
    setTodos(toggleImpotantTodo(id, todos));
  }, [id, todos, setTodos]);

  return (
    <StyledContainer>
      {completed ? (
        <StyledIcon onClick={onIncompleteTodo} className="fa fa-check-circle" />
      ) : (
        <StyledIcon onClick={onCompletedTodo} className="fa fa-circle-thin" />
      )}
      <StyledButton>{title}</StyledButton>
      {impotant ? (
        <StyledIcon onClick={onToggleImpotantTodo} className="fa fa-star" />
      ) : (
        <StyledIcon onClick={onToggleImpotantTodo} className="fa fa-star-o" />
      )}
    </StyledContainer>
  );
};
