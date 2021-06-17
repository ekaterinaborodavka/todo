import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { COLORS } from "~src/colors";
import { Context } from "~src/context/context";
import { useStateFlags } from "~src/hooks/useStateFlags";
import { Todo } from "~src/types";
import { TodoListItem } from "~components";

const StyledIconButton = styled.button`
  border: 1px solid transparent;
  background-color: transparent;
  margin: 1rem 0 1rem 0;
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const StyledIcon = styled.i`
  font-size: 1.4rem;
  -webkit-text-stroke: 3px ${COLORS.white};
  color: ${(props) => props.theme.color};
  margin-right: 1rem;
`;

const StyledTitle = styled.h2`
  color: ${(props) => props.theme.color};
  font-size: 1.1rem;
  font-weight: 500;
`;

interface CompleteTodoProps {
  todos: Array<Todo>;
  todoType: string | number;
}

export const CompleteTodo: React.FC<CompleteTodoProps> = ({ todos, todoType }) => {
  const { searchValue } = useContext(Context);
  const { flag: isCompleteVisible, toggleFlag: toggleSidebar } = useStateFlags(true);
  const { t } = useTranslation();

  return (
    <>
      {searchValue.trim().length ? null : (
        <>
          {todos.some((todo: Todo) => (todo.completed && todo[todoType]) || (todo.completed && todoType === "all")) ? (
            <>
              <StyledIconButton onClick={toggleSidebar}>
                <StyledIcon className={isCompleteVisible ? "fa fa-arrow-down" : "fa fa-arrow-right"} />
                <StyledTitle>{t("CompleteTodo")}</StyledTitle>
              </StyledIconButton>
              {isCompleteVisible
                ? todos.map((todo: Todo) =>
                    (todo.completed && todo[todoType]) || (todo.completed && todoType === "all") ? (
                      <TodoListItem key={todo.id} {...todo} />
                    ) : null
                  )
                : null}
            </>
          ) : null}
        </>
      )}
    </>
  );
};
