import { ParametersItem, Todo } from "~src/types";
import { SortOptions, TypeTodo } from "./utils";

export const createTodoItem = (title: string, todoType: string): Todo => {
  return {
    id: Date.now(),
    date: Date.now(),
    title,
    impotant: false,
    completed: false,
    myDay: false,
    planned: false,
    assigned: false,
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

export const completedTodo = (id: number, todos: Todo[]): Todo => {
  const ind = findInd(id, todos);
  const oldItem = todos[ind];
  return { ...oldItem, completed: true };
};

export const incompletedTodo = (id: number, todos: Todo[]): Todo => {
  const ind = findInd(id, todos);
  const oldItem = todos[ind];
  return { ...oldItem, completed: false };
};

export const toggleImpotantTodo = (id: number, todos: Todo[]): Todo => {
  const ind = findInd(id, todos);
  const oldItem = todos[ind];
  return { ...oldItem, impotant: !oldItem.impotant };
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
      currentTodos.sort((a, b) => {
        return Number(b.impotant) - Number(a.impotant);
      });
      return currentTodos;
    // We should add these options after the development of the corresponding next functions: deadline and day list
    // case SortOptions.creationDate:
    //   break;
    // case SortOptions.myDayList:
    //   break;
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
    if (typeTodo === "all") {
      return !todo.completed;
    }

    return todo[typeTodo] && !todo.completed;
  };

  const filterTodos = todos.filter(filteredFunc);
  return filterTodos.length;
};

export const toggleCheckButton = (id: number, params: ParametersItem[]): ParametersItem[] => {
  const ind = params.findIndex((param) => param.id === id);
  const oldItem = params[ind];
  const newItem = { ...oldItem, check: !oldItem.check };
  return [...params.slice(0, ind), newItem, ...params.slice(ind + 1)];
};
