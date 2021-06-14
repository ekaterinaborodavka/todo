import { COLORS } from "~src/colors";
import { ThemeNames } from "~src/types";

export enum Icons {
  // eslint-disable-next-line no-unused-vars
  sun = "fa fa-sun-o",
  // eslint-disable-next-line no-unused-vars
  star = "fa fa-star-o",
  // eslint-disable-next-line no-unused-vars
  calendar = "fa fa-calendar",
  // eslint-disable-next-line no-unused-vars
  user = "fa fa-user-o",
  // eslint-disable-next-line no-unused-vars
  home = "fa fa-home",
  // eslint-disable-next-line no-unused-vars
  envelope = "fa fa-envelope-o",
  // eslint-disable-next-line no-unused-vars
  users = "fa fa-users",
  // eslint-disable-next-line no-unused-vars
  paperclip = "fa fa-paperclip",
  // eslint-disable-next-line no-unused-vars
  check = "fa fa-check",
  // eslint-disable-next-line no-unused-vars
  calendarPlus = "fa fa-calendar-plus-o",
  // eslint-disable-next-line no-unused-vars
  arrows = "fa fa-arrows-v",
  // eslint-disable-next-line no-unused-vars
  paintBrush = "fa fa-paint-brush",
  // eslint-disable-next-line no-unused-vars
  angleRight = "fa fa-angle-right",
  // eslint-disable-next-line no-unused-vars
  print = "fa fa-print",
}

export enum TypeTodo {
  // eslint-disable-next-line no-unused-vars
  myDay = "myDay",
  // eslint-disable-next-line no-unused-vars
  impotant = "impotant",
  // eslint-disable-next-line no-unused-vars
  planned = "planned",
  // eslint-disable-next-line no-unused-vars
  assigned = "assigned",
  // eslint-disable-next-line no-unused-vars
  all = "all",
}

export const sidebarContent = [
  {
    id: 1,
    icon: Icons.sun,
    title: "Мой День",
    color: COLORS.grey,
    typeTodo: TypeTodo.myDay,
  },
  {
    id: 2,
    icon: Icons.star,
    title: "Важно",
    color: COLORS.grey,
    typeTodo: TypeTodo.impotant,
  },
  {
    id: 3,
    icon: Icons.calendar,
    title: "Запланировано",
    color: COLORS.grey,
    typeTodo: TypeTodo.planned,
  },
  {
    id: 4,
    icon: Icons.user,
    title: "Назначенные Вам",
    color: COLORS.green,
    typeTodo: TypeTodo.assigned,
  },
  {
    id: 5,
    icon: Icons.home,
    title: "Задачи",
    color: COLORS.blue,
    typeTodo: TypeTodo.all,
  },
];

export const sidebarFooter = [
  {
    id: 6,
    icon: Icons.envelope,
  },
  {
    id: 7,
    icon: Icons.calendar,
  },
  {
    id: 8,
    icon: Icons.users,
  },
  {
    id: 9,
    icon: Icons.paperclip,
  },
  {
    id: 10,
    icon: Icons.check,
  },
];

export const themeButtons = [
  {
    id: 11,
    theme: ThemeNames.blue,
    colorGradBottom: COLORS.themeButtonBlueGradBottom,
    colorGradLeft: COLORS.themeButtonBlueGradLeft,
  },
  {
    id: 12,
    theme: ThemeNames.purple,
    colorGradBottom: COLORS.themeButtonPurpleGradBottom,
    colorGradLeft: COLORS.themeButtonPurpleGradLeft,
  },
  {
    id: 13,
    theme: ThemeNames.red,
    colorGradBottom: COLORS.themeButtonRedGradBottom,
    colorGradLeft: COLORS.themeButtonRedGradLeft,
  },
  {
    id: 14,
    theme: ThemeNames.green,
    colorGradBottom: COLORS.themeButtonGreenGradBottom,
    colorGradLeft: COLORS.themeButtonGreenGradLeft,
  },
  {
    id: 15,
    theme: ThemeNames.skyBlue,
    colorGradBottom: COLORS.themeButtonSkyBlueGradBottom,
    colorGradLeft: COLORS.themeButtonSkyBlueGradLeft,
  },
];

export const sortVariant = [
  {
    id: 16,
    icon: Icons.star,
    title: "Baжность",
  },
  {
    id: 17,
    icon: Icons.calendar,
    title: "Дата выполнения",
  },
  {
    id: 18,
    icon: Icons.sun,
    title: "По добавлениям в 'Мой день'",
  },
  {
    id: 19,
    icon: Icons.arrows,
    title: "По алфавиту",
  },
  {
    id: 20,
    icon: Icons.calendarPlus,
    title: "По дате создания",
  },
];

export const parametersList = [
  {
    id: 1,
    icon: Icons.print,
    title: "Печать списка",
  },
];
