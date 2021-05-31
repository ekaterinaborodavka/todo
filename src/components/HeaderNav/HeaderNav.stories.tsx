import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";
import { HeaderNav } from "./HeaderNav";

export default {
  title: "HeaderNav",
  component: HeaderNav,
  decorators: [withKnobs],
} as Meta;

export const Default: Story = () => {
  return <HeaderNav></HeaderNav>;
};
