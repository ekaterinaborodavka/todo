import React, { useContext, useEffect, useState, useCallback } from "react";
import styled from "styled-components/macro";
import { Link, Redirect } from "react-router-dom";

import { COLORS } from "~src/colors";
import { Context } from "~src/context/context";
import { TypeTodo } from "~src/utils/utils";
import { countTodos } from "~src/utils/todoUtils";
import { ParametersItem } from "~src/types";

const StyledIcon = styled.i<{ color: string }>`
  color: ${(props) => props.color};
`;

const StyledItem = styled.li`
  padding: 0.5rem 1.5rem;
  &:hover {
    background-color: ${COLORS.lightGrey};
  }
`;

const StyledTitle = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  margin-left: 2rem;
  width: 85%;
  white-space: nowrap;
`;

const StyledCount = styled.div`
  width: 10%;
  font-size: 0.8rem;
`;

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
  text-decoration: none;
`;

export interface SidebarLeftContentItemProps {
  icon: string;
  title: string;
  color: string;
  typeTodo: TypeTodo;
}

export const SidebarLeftContentItem: React.FC<SidebarLeftContentItemProps> = ({ typeTodo, color, icon, title }) => {
  const { todos, smartListParams } = useContext(Context);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(countTodos(todos, typeTodo));
  }, [smartListParams, title, todos, typeTodo]);

  const linkTo = useCallback(() => {
    if (typeTodo === TypeTodo.home) {
      return "/";
    }

    return `/${typeTodo}`;
  }, [typeTodo]);

  const findIndexOfSidebarElement = (list: ParametersItem[], value: string, type: string): number =>
    list.findIndex((el) => el[type] === value);

  const isHideListsActive = smartListParams[findIndexOfSidebarElement(smartListParams, "hideList", "info")]?.check;
  const mainLists = typeTodo === TypeTodo.home || typeTodo === TypeTodo.myDay;
  const isShowLists = smartListParams[findIndexOfSidebarElement(smartListParams, title, "title")]?.check;

  const isDisplayControlLeftSidebar = (): boolean => {
    if (isHideListsActive) {
      return mainLists || Boolean(countTodos(todos, typeTodo));
    }

    return isShowLists || mainLists;
  };

  return (
    <>
      {isHideListsActive || !isShowLists ? <Redirect to="/" /> : null}

      {isDisplayControlLeftSidebar() ? (
        <StyledItem>
          <StyledLink to={linkTo}>
            <div>
              <StyledIcon color={color} className={icon} />
            </div>
            <StyledContent>
              <StyledTitle color={color}>{title}</StyledTitle>
              <StyledCount>{amount ? amount : null}</StyledCount>
            </StyledContent>
          </StyledLink>
        </StyledItem>
      ) : null}
    </>
  );
};
