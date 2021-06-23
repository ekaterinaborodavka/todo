import React, { useContext, useCallback } from "react";

import { Icons } from "~src/utils/utils";
import { Context } from "~src/context/context";
import { Todo } from "~src/types";

import { StyledFooter, StyledButton, StyledIcon } from "./TodoDetailsFooter.styled";

export const TodoDetailsFooter: React.FC = () => {
  const { currentTodo, setCurrentTodo } = useContext(Context);
  const date = new Date(currentTodo.date);
  const dateString = date.getDate() + "/" + (Number(date.getMonth()) + 1) + "/" + date.getFullYear();

  const onHideDetails = useCallback(() => {
    setCurrentTodo({} as Todo);
  }, [setCurrentTodo]);

  return (
    <StyledFooter>
      <StyledButton onClick={onHideDetails}>
        <StyledIcon className={Icons.arrowRight} />
      </StyledButton>
      <span>{dateString}</span>
      <StyledButton>
        <StyledIcon className={Icons.delete} />
      </StyledButton>
    </StyledFooter>
  );
};
