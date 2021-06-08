import React from "react";

import { TodoListItem } from "~components";
import { Todo } from "~src/types";

export interface TodoListProps {
  todos: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </>
  );
};
