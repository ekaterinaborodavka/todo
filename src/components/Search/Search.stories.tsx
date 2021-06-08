import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";
import { Search } from "./Search";

export default {
  title: "Search",
  component: Search,
  decorators: [withKnobs],
} as Meta;

export const Default: Story = () => {
  return <Search />;
};
