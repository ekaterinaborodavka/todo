import React, { useContext, useCallback } from "react";
import styled from "styled-components/macro";

import { Todo } from "~src/types";
import { COLORS } from "~src/colors";
import { Context } from "~src/context/context";
import { changeTodosList, toggleCompletedTodo, toggleImportantTodo } from "~src/utils/todoUtils";
import { PopupContent, ListOptions } from "~src/components";
import { actionOptions, SortOptions } from "~src/utils/utils";
import { useStateFlags } from "~src/hooks/useStateFlags";

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

const StyledPopup = styled.div`
  width: 200px;
  color: inherit;
  text-align: center;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;
export const TodoListItem: React.FC<Todo> = ({ title, completed, important, id }) => {
  const { todos, updateTodo, setTodos } = useContext(Context);
  const { flag: isPopupOpened, toggleFlag: togglePopup, setFlagFalse: setHidePopup } = useStateFlags(false);

  const onClose = useCallback(() => {
    if (isPopupOpened) {
      setHidePopup();
    }
  }, [isPopupOpened, setHidePopup]);
  const onToggleCompletedTodo = useCallback(() => {
    const newItem = toggleCompletedTodo(id, todos);
    updateTodo(newItem, id);
  }, [id, todos, updateTodo]);

  const onToggleImportantTodo = useCallback(() => {
    const newItem = toggleImportantTodo(id, todos);
    updateTodo(newItem, id);
  }, [id, todos, updateTodo]);
  const onRightButtonMousePress = (e: React.MouseEvent) => {
    e.preventDefault();
    togglePopup();
  };

  const onChangeTodos = useCallback(
    ({ currentTarget }: React.MouseEvent) => {
      const value = currentTarget.getAttribute("data-value");
      const currentValue = value ? value : SortOptions.default;
      const newTodos = changeTodosList(todos, currentValue, id);
      setTodos(newTodos);
    },
    [todos, id, setTodos]
  );

  return (
    <>
      <StyledContainer onContextMenu={onRightButtonMousePress}>
        <StyledIcon
          onClick={onToggleCompletedTodo}
          className={completed ? "fa fa-check-circle" : "fa fa-circle-thin"}
        />
        <StyledButton>{title}</StyledButton>
        <StyledIcon onClick={onToggleImportantTodo} className={important ? "fa fa-star" : "fa fa-star-o"} />
      </StyledContainer>

      {isPopupOpened ? (
        <StyledPopup>
          <PopupContent onClose={onClose}>
            <ListOptions options={actionOptions} onClick={onChangeTodos} />
          </PopupContent>
        </StyledPopup>
      ) : null}
    </>
  );
};
