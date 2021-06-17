import React, { useContext } from "react";

import { TodoListItem, CompleteTodo } from "~components";
import { Todo } from "~src/types";
import { Context } from "~src/context/context";

export interface TodoListProps {
  todos: Array<Todo>;
  todoType?: keyof Todo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, todoType = "all" }) => {
  const { searchValue } = useContext(Context);
  return (
    <>
      {todos.map((todo: Todo) =>
        (
          searchValue.trim().length
            ? todo[todoType] || todoType === "all"
            : (todo[todoType] && !todo.completed) || (todoType === "all" && !todo.completed)
        ) ? (
          <TodoListItem key={todo.id} {...todo} />
        ) : null
      )}
      {todos.some((todo: Todo) => todo.completed) ? <CompleteTodo todos={todos} todoType={todoType} /> : null}
    </>
  );
};
