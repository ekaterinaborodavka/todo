import React, { useContext, useEffect, useState, useCallback } from "react";
import { Redirect } from "react-router-dom";

import { Context } from "~src/context/context";
import { TypeTodo } from "~src/utils/utils";
import { countTodos, findIndexOfSidebarElement } from "~src/utils/todoUtils";
import { SidebarDragDropProps, SidebarLeftContentItemProps } from "~src/types";

import {
  StyledContent,
  StyledCount,
  StyledIcon,
  StyledItem,
  StyledLink,
  StyledTitle,
} from "./SidebarLeftContentItem.styled";

export const SidebarLeftContentItem: React.FC<SidebarLeftContentItemProps & SidebarDragDropProps> = ({
  typeTodo,
  color,
  icon,
  title,
  isDrag,
  dragStart,
  dragOver,
  dragDrop,
}) => {
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

  const isHideListsActive = smartListParams[findIndexOfSidebarElement(smartListParams, "hideList", "info")]?.check;
  const mainLists = typeTodo === TypeTodo.home || typeTodo === TypeTodo.myDay;
  const isShowLists = smartListParams[findIndexOfSidebarElement(smartListParams, title, "title")]?.check;

  const isDisplayControlLeftSidebar = (): boolean => {
    if (isHideListsActive) {
      return mainLists || Boolean(countTodos(todos, typeTodo));
    }

    return isShowLists || mainLists || !TypeTodo[typeTodo as keyof typeof TypeTodo];
  };

  return (
    <>
      {isHideListsActive || !isShowLists ? <Redirect to="/" /> : null}

      {isDisplayControlLeftSidebar() ? (
        <StyledItem draggable={isDrag} onDragStart={dragStart} onDragOver={dragOver} onDrop={dragDrop}>
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
