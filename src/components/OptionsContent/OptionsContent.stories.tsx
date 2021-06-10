import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs, text } from "@storybook/addon-knobs";
import { OptionsContent } from "./OptionsContent";

export default {
  title: "OptionsContent",
  component: OptionsContent,
  decorators: [withKnobs],
} as Meta;

export const Default: Story = () => {
  return <OptionsContent title={text("Title", "Title")} />;
};
