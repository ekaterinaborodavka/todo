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
  important = "/impotant",
  // eslint-disable-next-line no-unused-vars
  assigned = "/assigned",
  // eslint-disable-next-line no-unused-vars
  planned = "/planned",
  // eslint-disable-next-line no-unused-vars
  all = "/",
}

export interface Todo {
  [key: string]: number | string | boolean | undefined;
  id: number;
  title: string;
  impotant: boolean;
  completed: boolean;
  myDay: boolean;
  planned: boolean;
  assigned: boolean;
  all?: boolean;
}
