import { COLORS } from "~src/colors";
import { ParametersItem, ThemeNames } from "~src/types";

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
  // eslint-disable-next-line no-unused-vars
  close = "fa fa-times",
  // eslint-disable-next-line no-unused-vars
  checkCircle = "fa fa-check-circle-o",
  // eslint-disable-next-line no-unused-vars
  listAll = "fa fa-list-alt",
  // eslint-disable-next-line no-unused-vars
  delete = "fa fa-trash-o",
}

export enum SortOptions {
  // eslint-disable-next-line no-unused-vars
  importance = "Вaжность",
  // eslint-disable-next-line no-unused-vars
  deadline = "Дата выполнения",
  // eslint-disable-next-line no-unused-vars
  myDayList = "По добавлениям в 'Мой день'",
  // eslint-disable-next-line no-unused-vars
  alphabet = "По алфавиту",
  // eslint-disable-next-line no-unused-vars
  creationDate = "По дате создания",
  // eslint-disable-next-line no-unused-vars
  default = "default",
}

export enum ActionOptions {
  // eslint-disable-next-line no-unused-vars
  importance = "Пометить как важное",
  // eslint-disable-next-line no-unused-vars
  myDayList = "Добавить в 'Мой день'",
  // eslint-disable-next-line no-unused-vars
  completed = "Отметить как выполненное",
  // eslint-disable-next-line no-unused-vars
  delete = "Удалить",
}

export enum TypeTodo {
  // eslint-disable-next-line no-unused-vars
  myDay = "myDay",
  // eslint-disable-next-line no-unused-vars
  important = "important",
  // eslint-disable-next-line no-unused-vars
  planned = "planned",
  // eslint-disable-next-line no-unused-vars
  assigned = "assigned",
  // eslint-disable-next-line no-unused-vars
  home = "home",
  // eslint-disable-next-line no-unused-vars
  allTodo = "allTodo",
  // eslint-disable-next-line no-unused-vars
  completedTodo = "completedTodo",
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
    typeTodo: TypeTodo.important,
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
    typeTodo: TypeTodo.home,
  },
  {
    id: 6,
    icon: Icons.listAll,
    title: "Все",
    color: COLORS.grey,
    typeTodo: TypeTodo.allTodo,
  },
  {
    id: 7,
    icon: Icons.checkCircle,
    title: "Завершенные",
    color: COLORS.grey,
    typeTodo: TypeTodo.completedTodo,
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
    title: SortOptions.alphabet,
  },
  {
    id: 20,
    icon: Icons.calendarPlus,
    title: SortOptions.creationDate,
  },
];

export const actionOptions = [
  {
    id: 21,
    icon: Icons.star,
    title: ActionOptions.importance,
  },
  {
    id: 22,
    icon: Icons.sun,
    title: ActionOptions.myDayList,
  },
  {
    id: 23,
    icon: Icons.check,
    title: ActionOptions.completed,
  },
  {
    id: 24,
    icon: Icons.delete,
    title: ActionOptions.delete,
  },
];
export const parametersList = [
  {
    id: 1,
    icon: Icons.print,
    title: "Печать списка",
  },
];

export const parametersTotalList: ParametersItem[] = [
  { id: 1, title: "Запрашивать подтверждение перед удалением", check: true },
  { id: 2, title: "Добавление новых задач наверх", check: true },
  { id: 3, title: "Перемещение вверх избранных задач", check: true },
  { id: 4, title: "Воспроизводить звук при завершении", check: true },
  { id: 5, title: "Показывать контекстные меню", check: true },
  { id: 6, title: "Включить напоминания", check: true },
];

export const parametersMyDayList: ParametersItem[] = [
  // eslint-disable-next-line quotes
  { id: 1, title: 'Показывает возможные задачи в представлении " Мой День "', check: true },
  { id: 2, title: "Показывать рекомендации по задачам к выполнению", check: true },
];

export const parametersSmartList: ParametersItem[] = [
  { id: 1, title: "Важно", check: true },
  { id: 2, title: "Запланировано", check: true },
  { id: 3, title: "Все", check: false },
  { id: 4, title: "Завершенные", check: true },
  { id: 5, title: "Назначенные Вам", check: true },
  { id: 6, title: "Автоматически скрывать пустые смарт-списки", check: false },
];

export const parametersApplicationsList: ParametersItem[] = [{ id: 1, title: "Планировщик", check: true }];
