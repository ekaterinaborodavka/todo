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
