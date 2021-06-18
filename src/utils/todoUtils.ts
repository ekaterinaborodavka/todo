import { Todo } from "~src/types";
import { SortOptions, TypeTodo } from "./utils";

export const createTodoItem = (title: string, todoType: string): Todo => {
  return {
    id: Date.now(),
    date: Date.now(),
    title,
    important: false,
    completed: false,
    myDay: false,
    planned: false,
    assigned: false,
    timeCompleted: 0,
    [todoType]: true,
  };
};

export const addNewTodo = (title: string, todos: Todo[], todoType: string): Todo[] => {
  const newTodoItem = createTodoItem(title, todoType);
  const newTodos = [...todos, newTodoItem];
  return newTodos;
};

const findInd = (id: number, todos: Todo[]): number => {
  return todos.findIndex((todo) => todo.id === id);
};

export const toggleCompletedTodo = (id: number, todos: Todo[]): Todo => {
  const ind = findInd(id, todos);
  const oldItem = todos[ind];
  return { ...oldItem, completed: !oldItem.completed, timeCompleted: +`${oldItem.timeCompleted ? 0 : Date.now()}` };
};

export const toggleImportantTodo = (id: number, todos: Todo[]): Todo => {
  const ind = findInd(id, todos);
  const oldItem = todos[ind];
  return { ...oldItem, important: !oldItem.important };
};

export const update = (todos: Todo[], newItem: Todo, id: number): Todo[] => {
  const ind = findInd(id, todos);
  return [...todos.slice(0, ind), newItem, ...todos.slice(ind + 1)];
};

export const search = (todos: Todo[], value: string): Todo[] => {
  return todos.filter((todo) => todo.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
};

export const sortItemsList = (todos: Todo[], value: string): Todo[] => {
  const currentTodos = todos.slice();
  switch (value) {
    case SortOptions.importance:
      currentTodos.sort((a, b) => Number(a.important) - Number(b.important));
      return currentTodos;

    case SortOptions.deadline:
      currentTodos.sort((a, b) => a.timeCompleted - b.timeCompleted);
      return currentTodos;

    case SortOptions.alphabet:
      currentTodos.sort((a, b) => a.title.localeCompare(b.title));
      return currentTodos;

    case SortOptions.creationDate:
      currentTodos.sort((a, b) => a.date - b.date);
      return currentTodos;

    default:
      currentTodos.sort((a, b) => a.date - b.date);
      return currentTodos;
  }
};

export const countTodos = (todos: Todo[], typeTodo: TypeTodo): number => {
  const filteredFunc = (todo: Todo) => {
    if (typeTodo === TypeTodo.all) {
      return !todo.completed;
    }

    return todo[typeTodo] && !todo.completed;
  };

  const filterTodos = todos.filter(filteredFunc);
  return filterTodos.length;
};
