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
}

export const Context = createContext({} as ContextProps);
