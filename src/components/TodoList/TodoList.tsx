import React, { useContext } from "react";

import { TodoListItem, CompletedTodo } from "~components";
import { Todo } from "~src/types";
import { Context } from "~src/context/context";
import { TypeTodo } from "~src/utils/utils";

export interface TodoListProps {
  todos: Array<Todo>;
  todoType?: keyof Todo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, todoType = TypeTodo.all }) => {
  const { searchValue } = useContext(Context);
  return (
    <>
      {todos.map((todo: Todo) =>
        (
          searchValue.trim().length
            ? todo[todoType] || todoType === TypeTodo.all
            : (todo[todoType] || todoType === TypeTodo.all) && !todo.completed
        ) ? (
          <TodoListItem key={todo.id} {...todo} />
        ) : null
      )}
      {todos.some((todo: Todo) => todo.completed) ? <CompletedTodo todos={todos} todoType={todoType} /> : null}
    </>
  );
};
