import { createContext } from "react";
import { ParametersItem, SidebarLeftContentItemProps, ThemeNames } from "~src/types";
import { Todo } from "~components";

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
  addTodo: (value: string, todoType: string) => void;
  // eslint-disable-next-line no-unused-vars
  updateTodo: (item: Todo, id: number) => void;
  totalParams: ParametersItem[];
  setTotalParams: React.Dispatch<React.SetStateAction<ParametersItem[]>>;
  myDayParams: ParametersItem[];
  setMyDayParams: React.Dispatch<React.SetStateAction<ParametersItem[]>>;
  smartListParams: ParametersItem[];
  setSmartListParams: React.Dispatch<React.SetStateAction<ParametersItem[]>>;
  applicationsParams: ParametersItem[];
  setApplicationsParams: React.Dispatch<React.SetStateAction<ParametersItem[]>>;
  userList: SidebarLeftContentItemProps[];
  setUserList: React.Dispatch<React.SetStateAction<SidebarLeftContentItemProps[]>>;
  currentTodo: Todo;
  setCurrentTodo: React.Dispatch<React.SetStateAction<Todo>>;
}

export const Context = createContext({} as ContextProps);
