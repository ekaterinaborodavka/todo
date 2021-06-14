import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, text, optionsKnob } from "@storybook/addon-knobs";

import { SidebarLeftContentItem, SidebarLeftContentItemProps } from "./SidebarLeftContentItem";
import { Icons, TypeTodo } from "~src/utils/utils";

export default {
  title: "SidebarLeftContentItem",
  component: SidebarLeftContentItem,
  decorators: [withKnobs],
} as Meta;

// eslint-disable-next-line no-unused-vars
enum ICONS_COLORS {
  // eslint-disable-next-line no-unused-vars
  white = "white",
  // eslint-disable-next-line no-unused-vars
  grey = "grey",
  // eslint-disable-next-line no-unused-vars
  green = "#5ca52d",
  // eslint-disable-next-line no-unused-vars
  blue = "#3e69e4",
}

export const Default: Story<SidebarLeftContentItemProps> = () => {
  return (
    <SidebarLeftContentItem
      title={text("Title", "MyDay")}
      icon={optionsKnob("Icon", Icons, Icons.sun, { display: "select" })}
      color={optionsKnob("Color", ICONS_COLORS, ICONS_COLORS.grey, { display: "select" })}
      typeTodo={optionsKnob("typeTodo", TypeTodo, TypeTodo.all, { display: "select" })}
    ></SidebarLeftContentItem>
  );
};
