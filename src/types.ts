export enum ThemeNames {
  // eslint-disable-next-line no-unused-vars
  blue = "blue",
  // eslint-disable-next-line no-unused-vars
  purple = "purple",
  // eslint-disable-next-line no-unused-vars
  red = "red",
  // eslint-disable-next-line no-unused-vars
  green = "green",
  // eslint-disable-next-line no-unused-vars
  skyBlue = "skyBlue",
}

export enum PathNameMain {
  // eslint-disable-next-line no-unused-vars
  myDay = "/myDay",
  // eslint-disable-next-line no-unused-vars
  important = "/important",
  // eslint-disable-next-line no-unused-vars
  assigned = "/assigned",
  // eslint-disable-next-line no-unused-vars
  planned = "/planned",
  // eslint-disable-next-line no-unused-vars
  home = "/",
}

export enum HeaderButtonsName {
  // eslint-disable-next-line no-unused-vars
  parameters = "parameters",
  // eslint-disable-next-line no-unused-vars
  reference = "reference",
  // eslint-disable-next-line no-unused-vars
  opportunities = "opportunities",
}

export enum SidebarRightContentTitles {
  // eslint-disable-next-line no-unused-vars
  parameters = "Параметры",
  // eslint-disable-next-line no-unused-vars
  reference = "Справка",
  // eslint-disable-next-line no-unused-vars
  opportunities = "Новые возможности",
}

export enum ParameterTitles {
  // eslint-disable-next-line no-unused-vars
  total = "Общие",
  // eslint-disable-next-line no-unused-vars
  myDay = "Мой день",
  // eslint-disable-next-line no-unused-vars
  smartList = "Смарт-списки",
  // eslint-disable-next-line no-unused-vars
  applications = "Подключенные приложения",
}

export interface Todo {
  [key: string]: number | string | boolean | undefined;
  id: number;
  date: number;
  title: string;
  completed: boolean;
  timeCompleted: number;
  myDay: boolean;
  important: boolean;
  planned: boolean;
  assigned: boolean;
  home?: boolean;
  allTodo?: boolean;
}

export interface SidebarRightContent {
  title: string;
  component: React.FunctionComponent;
}

export interface ParametersItem {
  [key: string]: string | number | boolean;
  id: number;
  title: string;
  check: boolean;
}

export interface SidebarLeftContentItemProps {
  id: number;
  icon: string;
  title: string;
  color: string;
  typeTodo: string;
}

export interface SidebarDragDropProps {
  isDrag: boolean;
  // eslint-disable-next-line no-unused-vars
  dragStart?: (e: React.DragEvent<HTMLLIElement>, list?: SidebarLeftContentItemProps) => void;
  // eslint-disable-next-line no-unused-vars
  dragOver?: (e: React.DragEvent<HTMLLIElement>) => void;
  // eslint-disable-next-line no-unused-vars
  dragDrop?: (e: React.DragEvent<HTMLLIElement>, list?: SidebarLeftContentItemProps) => void;
}
