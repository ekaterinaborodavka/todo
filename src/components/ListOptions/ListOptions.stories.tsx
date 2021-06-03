import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";
import { ListOptions } from "./ListOptions";

export default {
  title: "ListOptions",
  component: ListOptions,
  decorators: [withKnobs],
} as Meta;

export const Default: Story = () => {
  return <ListOptions />;
};
