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

export enum SortOptions {
  // eslint-disable-next-line no-unused-vars
  importance = "Baжность",
  // eslint-disable-next-line no-unused-vars
  deadline = "Дата выполнения",
  // eslint-disable-next-line no-unused-vars
  myDayList = "По добавлениям в 'Мой день'",
  // eslint-disable-next-line no-unused-vars
  alphabetically = "По алфавиту",
  // eslint-disable-next-line no-unused-vars
  creationDate = "По дате создания",
}

export const sidebarContent = [
  {
    id: 1,
    icon: Icons.sun,
    title: "Мой День",
    color: COLORS.grey,
  },
  {
    id: 2,
    icon: Icons.star,
    title: "Важно",
    color: COLORS.grey,
  },
  {
    id: 3,
    icon: Icons.calendar,
    title: "Запланировано",
    color: COLORS.grey,
  },
  {
    id: 4,
    icon: Icons.user,
    title: "Назначенные Вам",
    color: COLORS.green,
  },
  {
    id: 5,
    icon: Icons.home,
    title: "Задачи",
    color: COLORS.blue,
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
    title: SortOptions.importance,
  },
  {
    id: 17,
    icon: Icons.calendar,
    title: SortOptions.deadline,
  },
  {
    id: 18,
    icon: Icons.sun,
    title: SortOptions.myDayList,
  },
  {
    id: 19,
    icon: Icons.arrows,
    title: SortOptions.alphabetically,
  },
  {
    id: 20,
    icon: Icons.calendarPlus,
    title: SortOptions.creationDate,
  },
];

export const parametersList = [
  {
    id: 1,
    icon: Icons.print,
    title: "Печать списка",
  },
];
