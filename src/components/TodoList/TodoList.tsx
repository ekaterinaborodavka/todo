import React from "react";

import { TodoListItem } from "~components";
import { Todo } from "~src/types";

export interface TodoListProps {
  todos: Array<Todo>;
  todoType?: keyof Todo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, todoType = "all" }) => {
  return (
    <>
      {todos.map((todo: Todo) =>
        todo[todoType] || todoType === "all" ? <TodoListItem key={todo.id} {...todo} /> : null
      )}
    </>
  );
};
