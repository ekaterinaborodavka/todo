import { Todo } from "~src/types";

export const createTodoItem = (title: string): Todo => {
  return {
    id: Date.now(),
    date: Date.now(),
    title,
    impotant: false,
    completed: false,
  };
};

export const addNewTodo = (title: string, todos: Todo[]): Todo[] => {
  const newTodoItem = createTodoItem(title);
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
  return todos.filter((todo) => todo.title.indexOf(value) !== -1);
};

export const sortItemsList = (todos: Todo[], value: string): Todo[] => {
  const currentTodos = todos.slice();
  switch (value) {
    case "Baжность":
      currentTodos.sort((a, b) => {
        return Number(b.impotant) - Number(a.impotant);
      });
      return currentTodos;

    // case "Дата выполнения":

    //   break;
    // case "По добавлениям в 'Мой день'":

    //   break;
    case "По алфавиту":
      currentTodos.sort();
      return currentTodos;

    case "По дате создания":
      currentTodos.sort((a, b) => a.date - b.date);
      return currentTodos;
    default:
      currentTodos.sort((a, b) => a.date - b.date);
      return currentTodos;
  }
};
