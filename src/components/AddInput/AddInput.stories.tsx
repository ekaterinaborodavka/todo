import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, text } from "@storybook/addon-knobs";
import { AddInput } from "./AddInput";

export default {
  title: "AddInput",
  component: AddInput,
  decorators: [withKnobs],
} as Meta;

export const Default: Story = () => {
  return <AddInput placeholder={text("Placeholder", "placeholder")} />;
};
