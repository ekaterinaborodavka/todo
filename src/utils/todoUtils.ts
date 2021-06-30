import { ParametersItem, SidebarLeftContentItemProps } from "~src/types";
import { ActionOptions, Icons, SortOptions, TypeTodo } from "~src/utils/utils";
import { COLORS } from "~src/colors";
import { Todo } from "~components";

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
    isPopupOpened: false,
  };
};

export const createListItem = (title: string): SidebarLeftContentItemProps => {
  return {
    id: Date.now(),
    icon: Icons.bars,
    title,
    color: COLORS.grey,
    typeTodo: title,
  };
};

export const addNewListItem = (title: string, list: SidebarLeftContentItemProps[]): SidebarLeftContentItemProps[] => {
  const newListItem = createListItem(title);
  const newList = [...list, newListItem];
  return newList;
};

export const addNewTodo = (title: string, todos: Todo[], todoType: string): Todo[] => {
  const newTodoItem = createTodoItem(title, todoType);
  const newTodos = [...todos, newTodoItem];
  return newTodos;
};

export const deleteCurrentTodo = (id: number, todos: Todo[]): Todo[] => {
  return todos.filter((todo) => todo.id !== id);
};

export const findInd = (id: number, todos: Todo[]): number => {
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

export const toggleMyDayTodo = (id: number, todos: Todo[]): Todo => {
  const index = findInd(id, todos);
  const oldItem = todos[index];
  return { ...oldItem, myDay: !oldItem.myDay };
};

export const toggleIsPopupOpenedTodo = (id: number, todos: Todo[]): Todo => {
  const ind = findInd(id, todos);
  const oldItem = todos[ind];
  return { ...oldItem, isPopupOpened: !oldItem.isPopupOpened };
};

export const onCloseOpenedPopups = (todos: Todo[]): Todo[] => {
  const currentTodos = todos.map((todo) => {
    todo.isPopupOpened = false;
    return todo;
  });
  return currentTodos;
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
      currentTodos.sort((a, b) => Number(b.important) - Number(a.important));
      return currentTodos;

    case SortOptions.deadline:
      currentTodos.sort((a, b) => b.timeCompleted - a.timeCompleted);
      return currentTodos;

    case SortOptions.alphabet:
      currentTodos.sort((a, b) => a.title.localeCompare(b.title));
      return currentTodos;

    case SortOptions.creationDate:
      currentTodos.sort((a, b) => b.date - a.date);
      return currentTodos;

    default:
      currentTodos.sort((a, b) => b.date - a.date);
      return currentTodos;
  }
};
export const changeTodosList = (todos: Todo[], value: string, id: number): Todo[] | Todo => {
  const currentTodos = todos.slice();
  switch (value) {
    case ActionOptions.importance:
      return toggleImportantTodo(id, currentTodos);
    case ActionOptions.unimportance:
      return toggleImportantTodo(id, currentTodos);
    case ActionOptions.myDayList:
      return toggleMyDayTodo(id, currentTodos);
    case ActionOptions.myDayListDelete:
      return toggleMyDayTodo(id, currentTodos);
    case ActionOptions.completed:
      return toggleCompletedTodo(id, currentTodos);
    case ActionOptions.uncompleted:
      return toggleCompletedTodo(id, currentTodos);
    case ActionOptions.delete:
      return currentTodos;
    default:
      return currentTodos;
  }
};

export const countTodos = (todos: Todo[], typeTodo: string): number => {
  const filteredFunc = (todo: Todo) => {
    if (typeTodo === TypeTodo.allTodo) {
      return !todo.completed;
    }

    if (typeTodo === TypeTodo.completedTodo) {
      return todo.completed;
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

export const findIndexOfSidebarElement = (list: ParametersItem[], value: string, type: string): number =>
  list.findIndex((el) => el[type] === value);

export const isTextValid = (list: SidebarLeftContentItemProps[], searchText: string): string => {
  const validText = list.filter(
    (el) =>
      el.title
        .toLowerCase()
        .trim()
        .replace(/\s+\([^\d]*(\d+)\)$/gi, "") === searchText.toLowerCase().trim()
  ).length;

  if (validText === 0) {
    return searchText;
  }

  return `${searchText} (${validText})`;
};

interface Actions {
  id: number;
  icon: string;
  title: string;
}

export const getActionsList = (important: boolean, completed: boolean, myDay: boolean): Actions[] => {
  return [
    {
      id: 21,
      icon: Icons.star,
      title: important ? ActionOptions.unimportance : ActionOptions.importance,
    },
    {
      id: 22,
      icon: Icons.sun,
      title: myDay ? ActionOptions.myDayListDelete : ActionOptions.myDayList,
    },
    {
      id: 23,
      icon: Icons.check,
      title: completed ? ActionOptions.uncompleted : ActionOptions.completed,
    },
    {
      id: 24,
      icon: Icons.delete,
      title: ActionOptions.delete,
    },
  ];
};
