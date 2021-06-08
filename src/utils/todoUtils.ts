import { Todo } from "~src/types";

export const addNewTodo = (title: string, todos: Todo[]): Todo[] => {
  const newTodoItem = {
    id: Date.now(),
    title,
    impotant: false,
    completed: false,
  };
  const newTodos = [...todos, newTodoItem];
  return newTodos;
};

const findInd = (id: number, todos: Todo[]): number => {
  return todos.findIndex((todo) => todo.id === id);
};

export const completedTodo = (id: number, todos: Todo[]): Todo[] => {
  const ind = findInd(id, todos);
  const oldItem = todos[ind];
  const newItem = { ...oldItem, completed: true };
  return [...todos.slice(0, ind), newItem, ...todos.slice(ind + 1)];
};

export const incompletedTodo = (id: number, todos: Todo[]): Todo[] => {
  const ind = findInd(id, todos);
  const oldItem = todos[ind];
  const newItem = { ...oldItem, completed: false };
  return [...todos.slice(0, ind), newItem, ...todos.slice(ind + 1)];
};

export const toggleImpotantTodo = (id: number, todos: Todo[]): Todo[] => {
  const ind = findInd(id, todos);
  const oldItem = todos[ind];
  const newItem = { ...oldItem, impotant: !oldItem.impotant };
  return [...todos.slice(0, ind), newItem, ...todos.slice(ind + 1)];
};

export const search = (todos: Todo[], value: string): Todo[] => {
  return todos.filter((todo) => todo.title.indexOf(value) !== -1);
};
