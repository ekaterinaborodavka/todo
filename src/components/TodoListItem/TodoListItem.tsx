import React, { useContext, useCallback } from "react";
import styled from "styled-components/macro";

import { Todo } from "~src/types";
import { COLORS } from "~src/colors";
import { Context } from "~src/context/context";
import { changeTodosList, toggleCompletedTodo, toggleImportantTodo } from "~src/utils/todoUtils";
import { ListOptions, Popup } from "~src/components";
import { actionOptions, SortOptions } from "~src/utils/utils";
import { useStateFlags } from "~src/hooks/useStateFlags";
import { OptionsContent } from "~src/components";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const { todos, updateTodo, setTodos } = useContext(Context);
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
