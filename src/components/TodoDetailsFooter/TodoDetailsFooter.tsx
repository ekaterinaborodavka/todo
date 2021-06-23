import React, { useContext, useCallback } from "react";
import styled from "styled-components/macro";

import { COLORS } from "~src/colors";
import { Icons } from "~src/utils/utils";
import { Context } from "~src/context/context";
import { Todo } from "~src/types";

const StyledFooter = styled.div`
  width: 100%;
  min-height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eaeaea;
  background-color: ${COLORS.bgDetailsMenu};
  border-top: 1px solid ${COLORS.detailsMenuBorder};
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem;
  box-sizing: border-box;
  color: ${COLORS.detailsTextColor};
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
`;

const StyledIcon = styled.i`
  color: ${COLORS.detailsTextColor};
`;

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
