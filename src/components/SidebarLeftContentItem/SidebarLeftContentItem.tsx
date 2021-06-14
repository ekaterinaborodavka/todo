import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/macro";

import { COLORS } from "~src/colors";
import { Context } from "~src/context/context";
import { TypeTodo } from "~src/utils/utils";
import { countTodos } from "~src/utils/todoUtils";

const StyledIcon = styled.i<{ color: string }>`
  color: ${(props) => props.color};
`;

const StyledItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0rem auto;
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
`;

export interface SidebarLeftContentItemProps {
  icon: string;
  title: string;
  color: string;
  typeTodo: TypeTodo;
}

export const SidebarLeftContentItem: React.FC<SidebarLeftContentItemProps> = ({ color, icon, title, typeTodo }) => {
  const { todos } = useContext(Context);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(countTodos(todos, typeTodo));
  }, [todos, typeTodo]);

  return (
    <StyledItem>
      <div>
        <StyledIcon color={color} className={icon} />
      </div>
      <StyledContent>
        <StyledTitle color={color}>{title}</StyledTitle>
        <StyledCount>{amount ? amount : null}</StyledCount>
      </StyledContent>
    </StyledItem>
  );
};
