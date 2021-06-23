import React, { useContext, useCallback } from "react";

import { TodoListItem, CompletedTodo, Todo } from "~components";
import { Context } from "~src/context/context";
import { TypeTodo } from "~src/utils/utils";

interface TodoListProps {
  todos: Array<Todo>;
  todoType?: keyof Todo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, todoType = TypeTodo.home }) => {
  const { searchValue } = useContext(Context);

  const isTodoListVisible = useCallback(
    (todo) =>
      searchValue.trim().length
        ? todo[todoType] || todoType === TypeTodo.allTodo
        : (todo[todoType] || todoType === TypeTodo.allTodo) && !todo.completed,
    [searchValue, todoType]
  );

  const isTodoCompleteVisible = useCallback(() => todos.some((todo: Todo) => todo.completed), [todos]);

  return (
    <>
      {todos.map((todo: Todo) => (isTodoListVisible(todo) ? <TodoListItem key={todo.id} {...todo} /> : null))}

      {isTodoCompleteVisible() ? <CompletedTodo todos={todos} todoType={todoType} /> : null}
    </>
  );
};
