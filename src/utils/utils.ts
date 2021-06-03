import { COLORS } from "~src/colors";
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
}

export const sidebarContent = [
  {
    id: 1,
    icon: Icons.sun,
    title: "Мой День",
    color: "grey",
  },
  {
    id: 2,
    icon: Icons.star,
    title: "Важно",
    color: "grey",
  },
  {
    id: 3,
    icon: Icons.calendar,
    title: "Запланировано",
    color: "grey",
  },
  {
    id: 4,
    icon: Icons.user,
    title: "Назначенные Вам",
    color: "green",
  },
  {
    id: 5,
    icon: Icons.home,
    title: "Задачи",
    color: "blue",
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
    theme: COLORS.themeBlue,
    colorGradBottom: COLORS.themeButtonBlueGradBottom,
    colorGradLeft: COLORS.themeButtonBlueGradLeft,
  },
  {
    id: 12,
    theme: COLORS.themePurple,
    colorGradBottom: COLORS.themeButtonPurpleGradBottom,
    colorGradLeft: COLORS.themeButtonPurpleGradLeft,
  },
  {
    id: 13,
    theme: COLORS.themeRed,
    colorGradBottom: COLORS.themeButtonRedGradBottom,
    colorGradLeft: COLORS.themeButtonRedGradLeft,
  },
  {
    id: 14,
    theme: COLORS.themeGreen,
    colorGradBottom: COLORS.themeButtonGreenGradBottom,
    colorGradLeft: COLORS.themeButtonGreenGradLeft,
  },
  {
    id: 15,
    theme: COLORS.themeSkyBlue,
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
