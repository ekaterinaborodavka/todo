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
  all = "/",
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

export interface Todo {
  [key: string]: number | string | boolean | undefined;
  id: number;
  date: number;
  title: string;
  important: boolean;
  completed: boolean;
  myDay: boolean;
  planned: boolean;
  assigned: boolean;
  timeCompleted: number;
  all?: boolean;
}

export interface SidebarRightContent {
  title: string;
  component: React.FunctionComponent;
}
