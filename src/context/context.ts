import { createContext } from "react";
import { ThemeNames, Todo } from "~src/types";

interface ContextProps {
  setThemeVariant: React.Dispatch<React.SetStateAction<ThemeNames>>;
  themeVariant: ThemeNames;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  filterTodos: Todo[];
  setFilterTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  // eslint-disable-next-line no-unused-vars
  addTodo: (value: string) => void;
  // eslint-disable-next-line no-unused-vars
  updateTodo: (item: Todo, id: number) => void;
}

export const Context = createContext({} as ContextProps);
