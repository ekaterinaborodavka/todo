import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { CheckButton } from "./CheckButton";

export default {
  title: "CheckButton",
  component: CheckButton,
  decorators: [withKnobs],
} as Meta;

export const Default: Story = () => {
  return <CheckButton status={boolean("Check", false)} />;
};
