import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import { TodoListItem } from "./TodoListItem";
import { Todo } from "~src/types";

export default {
  title: "TodoListItem",
  component: TodoListItem,
  decorators: [withKnobs],
} as Meta;

export const Default: Story<Todo> = () => {
  return (
    <TodoListItem
      id={1}
      date={1}
      title={text("Name", "UserName")}
      completed={boolean("Completed", false)}
      important={boolean("Important", false)}
      myDay={boolean("MyDay", false)}
      planned={boolean("Planned", false)}
      assigned={boolean("Assigned", false)}
      timeCompleted={number("timeCompleted", 0)}
    ></TodoListItem>
  );
};
