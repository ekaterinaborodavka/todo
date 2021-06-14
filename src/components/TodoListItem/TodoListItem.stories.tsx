import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

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
      title={text("Name", "UserName")}
      completed={boolean("Completed", false)}
      impotant={boolean("Impotant", false)}
      myDay={boolean("MyDay", false)}
      planned={boolean("Planned", false)}
      assigned={boolean("Assigned", false)}
    ></TodoListItem>
  );
};
